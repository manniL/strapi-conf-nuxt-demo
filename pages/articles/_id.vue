<template>
  <article v-if="article">
    <h1>{{ article.title }}</h1>
    <img :src="article.image" width="250" />
    <p v-html="article.content" />
  </article>
</template>

<script>
import { defineComponent, useAsync, useContext, useMeta, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    const { $strapi } = useContext()
    const route = useRoute()
    const article = useAsync(async () => await $strapi.$articles.findOne(route.value.params.id))

    useMeta({
      title: article.value?.title
    })

    return {
      article
    }
  },
  head: {}
})
</script>
