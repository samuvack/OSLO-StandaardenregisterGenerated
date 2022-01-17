<template>
  <div>
    <p>
      <vl-title tag-name="h3">
        <span class="vl-u-mark">{{ title }}</span>
      </vl-title>
    </p>
    <p>
      {{ info }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    info: {
      type: String,
      default: ''
    }
  }
}
</script>
