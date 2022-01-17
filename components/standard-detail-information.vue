<template>
  <vl-grid>
    <vl-column>
      <vl-title tag-name="h2"> Detailinformatie </vl-title>
    </vl-column>
    <vl-column>
      <vl-icon-list>
        <vl-icon-list-item icon="tag">
          <strong>Functioneel toepassingsgebied: </strong>
          {{ functioneelToepassingsgebied }}
        </vl-icon-list-item>
        <vl-icon-list-item icon="tag" mod-light>
          <strong>Organisatorisch werkingsgebied: </strong>
          {{ organisatorischWerkingsgebied }}
        </vl-icon-list-item>
        <vl-icon-list-item icon="calendar">
          <strong>Datum van aanmelding: </strong>
          {{ datumAanmelding }}
        </vl-icon-list-item>
        <vl-icon-list-item icon="calendar">
          <strong>Einde publieke review:</strong>
          {{ eindePubliekeReview || 'TBD' }}
        </vl-icon-list-item>
        <vl-icon-list-item icon="calendar">
          <strong>Erkenning door werkgroep datastandaarden:</strong>
          {{ erkenningWerkgroepDatastandaarden }}
        </vl-icon-list-item>
        <vl-icon-list-item icon="calendar">
          <strong>
            Erkenning door Stuurorgaan Vlaams Informatie- en ICT-beleid:
          </strong>
          {{ erkenningStuurorgaan }}
        </vl-icon-list-item>
      </vl-icon-list>
    </vl-column>
  </vl-grid>
</template>

<script lang="ts">
export default {
  props: {
    functioneelToepassingsgebied: {
      type: String,
      default: ''
    },
    organisatorischWerkingsgebied: {
      type: String,
      default: ''
    },
    datumAanmelding: {
      type: String,
      default: ''
    },
    eindePubliekeReview: {
      type: String,
      default: ''
    },
    erkenningWerkgroepDatastandaarden: {
      type: String,
      default: ''
    },
    erkenningStuurorgaan: {
      type: String,
      default: ''
    }
  }
}
</script>
