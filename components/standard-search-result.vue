<template>
  <standards-table v-if="result.length > 0" :standards="result" />
</template>

<script>
export default {
  data: () => {
    return {
      result: []
    }
  },
  mounted() {
    this.$root.$on('onStandardInput', (data) => {
      this.result = data
    })
  }
}
</script>
