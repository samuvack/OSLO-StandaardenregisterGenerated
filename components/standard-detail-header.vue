<template>
  <vl-grid>
    <vl-column>
      <vl-title tag-name="h1">{{ standard.naam }}</vl-title>
    </vl-column>

    <vl-column width="3">
      <vl-description-data-item label="Verantwoordelijke organisatie">
        <a
          v-if="
            standard.verantwoordelijke_organisatie &&
            standard.identificator_organisatie
          "
          :href="standard.identificator_organisatie"
        >
          {{ standard.verantwoordelijke_organisatie }}
        </a>
        <div v-else>
          {{ standard.verantwoordelijke_organisatie || 'Niet gekend' }}
        </div>
      </vl-description-data-item>
    </vl-column>

    <vl-column width="3">
      <vl-description-data-item label="Publicatiedatum">
        {{ standard.publicatiedatum }}
      </vl-description-data-item>
    </vl-column>

    <vl-column width="3">
      <vl-description-data-item label="Type toepassing">
        {{ standard.type_toepassing }}
      </vl-description-data-item>
    </vl-column>

    <vl-column width="3">
      <vl-description-data-item label="Categorie">
        {{ standard.categorie }}
      </vl-description-data-item>
    </vl-column>
  </vl-grid>
</template>

<script lang="ts">
export default {
  props: {
    standard: {
      type: Object,
      default: null
    }
  }
}
</script>
