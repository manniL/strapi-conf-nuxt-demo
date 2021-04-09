<template>
  <div>
    <h1>{{ page.title }}</h1>
    <p>{{ page.body }}</p>
    <blockquote>The source code is available on <a href="TODO">GitHub</a></blockquote>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: {}
    }
  },
  async asyncData({ $strapi }) {
    const page = {} // await $strapi.$pages.findOne('index')

    return { page }
  },
  head() {
    return {
      title: this.page.title
    }
  }
}
</script>
