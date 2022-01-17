<template>
  <div>
    <vl-input-field
      id="standard-input-field"
      v-model="input"
      autocomplete="off"
      name="standard-input-field"
      placeholder="Geef minstens 3 letters in..."
      mod-block
      @input="onChange"
    />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      input: '',
      result: []
    }
  },
  watch: {
    result(newValue) {
      this.$root.$emit('onStandardInput', newValue)
    }
  },
  methods: {
    async onChange() {
      const keyword = this.input.trim()
      if (keyword.length >= 3) {
        const data = await this.$content('standards', { deep: true })
          .where({ extension: '.json' })
          .fetch()

        this.result = data.filter((standard) =>
          this.filterByName(standard, keyword)
        )
      } else {
        this.result = []
      }
    },
    filterByName(standardObject, searchValue) {
      return standardObject.naam.toLowerCase().includes(searchValue)
        ? standardObject
        : null
    }
  }
}
</script>
