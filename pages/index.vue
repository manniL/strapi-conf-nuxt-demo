<template>
  <div v-if="page">
    <h1>{{ page.title }}</h1>
    <p>{{ page.content }}</p>
    <blockquote>The source code is available on <a href="https://github.com/manniL/strapi-conf-nuxt-frontend">GitHub</a>
    </blockquote>
  </div>
</template>

<script>
import { defineComponent, useAsync, useContext, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    const { $strapi } = useContext()
    const page = useAsync(async () => {
      const [page] = await $strapi.$pages.find({ title: 'Index' })
      return page
    })

    useMeta({
      title: page.value?.title
    })

    return {
      page
    }
  },
  head: {}
})
</script>
