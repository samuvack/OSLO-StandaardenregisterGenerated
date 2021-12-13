<template>
  <div>
    <content-header />
    <vl-layout>
      <vl-region>
        <vl-button id="prevButton"
          ><nuxt-link to="/"> Terug naar overzicht</nuxt-link>
        </vl-button>
      </vl-region>
      <vl-region>
        <vl-grid mod-stacked>
          <vl-column>
            <vl-title tag-name="h1">{{ data.naam }}</vl-title>
          </vl-column>

          <vl-column width="3">
            <vl-description-data-item label="Verantwoordelijke organisatie">
              <a
                v-if="
                  data.verantwoordelijke_organisatie &&
                  data.identificator_organisatie
                "
                :href="data.identificator_organisatie"
              >
                {{ data.verantwoordelijke_organisatie }}
              </a>
              <div v-else>
                {{ data.verantwoordelijke_organisatie || 'Niet gekend' }}
              </div>
            </vl-description-data-item>
          </vl-column>

          <vl-column width="3">
            <vl-description-data-item label="Publicatiedatum">
              {{ data.publicatiedatum }}
            </vl-description-data-item>
          </vl-column>

          <vl-column width="3">
            <vl-description-data-item label="Type toepassing">
              {{ data.type_toepassing }}
            </vl-description-data-item>
          </vl-column>

          <vl-column width="3">
            <vl-description-data-item label="Categorie">
              {{ data.categorie }}
            </vl-description-data-item>
          </vl-column>
        </vl-grid>
      </vl-region>
    </vl-layout>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const data = await $content('standards', params.slug).fetch()

    // TODO: fetch description and check whether or not it should be pushed to the content folder
    // FIXME: update template ↑
    return {
      data
    }
    /* const description = await $content(params.slug, 'beschrijving').fetch()
    return {
      data,
      description
    } */
  }
}
</script>
