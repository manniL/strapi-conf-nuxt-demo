<template>
  <div>
    <h1>{{ page.title }}</h1>
    <p>{{ page.content }}</p>
    <blockquote>The source code is available on <a href="https://github.com/manniL/strapi-conf-nuxt-frontend">GitHub</a></blockquote>
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: {}
    }
  },
  async asyncData ({ $strapi }) {
    const [page] = await $strapi.$pages.find({ title: 'Index' })

    return { page }
  },
  head () {
    return {
      title: this.page.title
    }
  }
}
</script>
