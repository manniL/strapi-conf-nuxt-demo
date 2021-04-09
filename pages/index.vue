<template>
  <div>
    <h1>{{ page.title }}</h1>
    <p>{{ page.content }}</p>
    <blockquote>The source code is available on <a href="https://github.com/manniL/strapi-conf-nuxt-frontend">GitHub</a>
    </blockquote>
  </div>
</template>

<script>
import { defineComponent, ref, useContext, useFetch, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    const { $strapi } = useContext()
    const page = ref({})

    useFetch(async () => {
      const [firstPage] = await $strapi.$pages.find({ title: 'Index' })
      page.value = firstPage
    })

    useMeta(() => ({
      title: page.value?.title
    }))

    return {
      page
    }
  },
  head: {}
})
</script>
