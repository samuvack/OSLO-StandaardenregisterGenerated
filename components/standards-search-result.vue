<template>
  <vl-grid v-if="result.length > 0">
    <vl-column
      v-for="standardObject in result"
      :key="standardObject.standard"
      width="6"
    >
      <result-card
        :contributors="standardObject.contributors"
        :total-people="standardObject.totalPeople.toString()"
        :name="standardObject.standard"
      />
    </vl-column>
  </vl-grid>
</template>

<script>
import resultCard from './result-card.vue'
export default {
  components: { resultCard },
  data: () => {
    return {
      result: []
    }
  },
  mounted() {
    this.$root.$on('onInput', (data) => {
      this.$forceUpdate()
      this.result = data
    })
  }
}
</script>
