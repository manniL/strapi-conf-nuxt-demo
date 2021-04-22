<template>
  <article>
    <h1>{{ article.title }}</h1>
    <img :src="article.image" width="250" />
    <p v-html="article.content" />
    <div v-if="$fetchState.error">
      Oops! Error occurred
    </div>
  </article>
</template>

<script>
import { defineComponent, useFetch, useContext, useMeta, useRoute, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    const { $strapi } = useContext()
    const route = useRoute()
    const article = ref({})

    useFetch(async () => {
      article.value = await $strapi.$articles.findOne(route.value.params.id)
    })

    useMeta(() => ({
      title: article.value?.title
    }))

    return {
      article
    }
  },
  head: {}
})
</script>
