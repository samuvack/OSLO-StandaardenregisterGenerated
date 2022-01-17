<template>
  <div>
    <content-header />
    <vl-layout>
      <vl-region>
        <vl-grid mod-stacked>
          <vl-column>
            <vl-button id="prevButton">
              <nuxt-link to="/"> Terug naar overzicht</nuxt-link>
            </vl-button>
          </vl-column>
          <vl-column>
            <standard-detail-header :standard="standard" />
          </vl-column>
          <vl-column>
            <standard-detail-description :description="markdown" />
          </vl-column>
          <vl-column width="6">
            <standard-detail-spotlight
              title="Specificatiedocument"
              subtitle="Normatief"
              :data="standard.specificatiedocument"
            />
          </vl-column>
          <vl-column width="6">
            <standard-detail-spotlight
              title="Aanvullende documentatie"
              subtitle="Niet-normatief"
              :data="[...standard.charter, ...standard.documentatie]"
            />
          </vl-column>
          <vl-column width="6">
            <standard-detail-spotlight
              title="Verslagen van de werkgroepvergaderingen"
              :data="standard.verslagen"
            />
          </vl-column>
          <vl-column width="6">
            <standard-detail-spotlight
              title="Presentaties en ander materiaal"
              :data="standard.presentaties"
            />
          </vl-column>
          <vl-column>
            <standard-detail-information
              :functioneel-toepassingsgebied="
                standard.functioneel_toepassingsgebied
              "
              :organisatorisch-werkingsgebied="
                standard.organisatorisch_werkingsgebied
              "
              :datum-aanmelding="standard.datum_van_aanmelding"
              :einde-publieke-review="standard.datum_einde_review"
              :erkenning-werkgroep-datastandaarden="
                standard.erkenning_werkgroep_datastandaarden
              "
              :erkenning-stuurorgaan="standard.erkenning_stuurgroep"
            />
          </vl-column>
          <vl-column>
            <standard-detail-footer />
          </vl-column>
        </vl-grid>
      </vl-region>
    </vl-layout>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const slug = params.slug
    const path = `standards/${slug}`

    const data = await $content(path).where({ extension: '.json' }).fetch()
    const standard = data[0]

    const description = await $content(path).where({ extension: '.md' }).fetch()
    const markdown = description[0]

    return { standard, markdown }
  }
}
</script>
