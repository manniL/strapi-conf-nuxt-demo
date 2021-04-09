<template>
  <div>
    <h1>Articles</h1>
    <blockquote>Here is some basic content</blockquote>
    <article v-for="article of articles" :key="article.id">
      <NuxtLink :to="`/articles/${article.id}`">
        <h3>{{ article.title }}</h3>
        <img :src="article.image" width="150" />
      </NuxtLink>
    </article>
    <div v-if="$fetchState.pending">
      Loading...
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, useContext, useFetch } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    const { $strapi } = useContext()
    const articles = ref([])
    useFetch(async () => {
      articles.value = await $strapi.$articles.find()
    })
    return { articles }
  },
  head: {
    title: 'Articles'
  }
})
</script>
