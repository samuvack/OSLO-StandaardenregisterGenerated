<template>
  <div>
    <content-header />
    <vl-layout>
      <vl-grid mod-stacked>
        <vl-column> </vl-column>
        <vl-column>
          <vl-button
            icon="arrow-left"
            :mod-icon-before="backButtonHover"
            @mouseover.native="backButtonHover = true"
            @mouseleave.native="backButtonHover = false"
            @click="navigateBack"
          >
            Terug
          </vl-button>
        </vl-column>
        <vl-column>
          <introduction-statistics />
        </vl-column>
        <vl-column>
          <general-staticstics />
        </vl-column>
        <vl-column>
          <statistics-standard />
        </vl-column>
      </vl-grid>
    </vl-layout>
  </div>
</template>

<script>
import generalStaticstics from '../../components/general-staticstics.vue'
export default {
  components: { generalStaticstics },
  data: () => {
    return {
      backButtonHover: false
    }
  },
  methods: {
    navigateBack() {
      this.$router.push('/')
    }
  }
}
</script>
