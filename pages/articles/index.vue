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
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi }) {
    const articles = await $strapi.$articles.find()

    return { articles }
  },
  head: {
    title: 'Articles'
  }
}
</script>
