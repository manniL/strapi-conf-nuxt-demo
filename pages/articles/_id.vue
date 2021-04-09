<template>
  <article>
    <h1>{{ article.title }}</h1>
    <img :src="article.image" width="250" />
    <p v-html="article.content" />
  </article>
</template>

<script>
export default {
  data () {
    return {
      article: {
        image: {}
      }
    }
  },
  async asyncData ({ params, $strapi }) {
    const article = await $strapi.$articles.findOne(params.id)
    return {
      article
    }
  },
  head () {
    return {
      title: this.article.title
    }
  }
}
</script>
