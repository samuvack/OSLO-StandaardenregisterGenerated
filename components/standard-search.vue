<template>
  <div>
    <vl-input-field
      id="standard-input-field"
      v-model="input"
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
      this.$root.$emit('onInput', newValue)
    }
  },
  methods: {
    async onChange() {
      const keyword = this.input.trim();
      if (keyword.length >= 3) {
        const data = await this.$content('statistics')
          .only(['standards'])
          .fetch()
        this.result = data.standards.filter((standard) =>
          this.filterByName(standard, keyword)
        )
      } else {
        this.result = []
      }
    },
    filterByName(standardObject, searchValue) {
      return standardObject.standard.toLowerCase().includes(searchValue)
        ? standardObject
        : null
    }
  }
}
</script>
