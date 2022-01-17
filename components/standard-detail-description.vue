<template>
  <vl-introduction><nuxt-content :document="description" /></vl-introduction>
</template>

<script lang="ts">
export default {
  props: {
    description: {
      type: Object,
      default: null
    }
  }
}
</script>
