<template>
  <vl-spotlight :title="title" :subtitle="subtitle">
    <vl-grid>
      <vl-column v-for="link of data" :key="link.waarde">
        <a :href="link.waarde">
          {{ link.naam }}
        </a>
      </vl-column>
    </vl-grid>
  </vl-spotlight>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>
