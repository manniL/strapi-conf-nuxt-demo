import { defineNuxtPlugin } from '@nuxtjs/composition-api'

export default defineNuxtPlugin(({ query, enablePreview }) => {
  if (typeof query.preview !== 'undefined') {
    console.log('PREVIEW MODE ENABLED')
    enablePreview!()
  }
})
