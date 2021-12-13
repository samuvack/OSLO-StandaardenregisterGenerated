<template>
  <div>
    <vl-grid mod-stacked>
      <vl-column>
        <vl-title tag-name="h3" mod-alt>
          Overzicht van de standaarden
        </vl-title>
      </vl-column>
      <vl-column>
        <vl-infoblock icon="search" title="Zoek een standaard">
          <vl-grid mod-stacked>
            <vl-column>
              <standard-search />
            </vl-column>
            <vl-column>
              <transition name="fade"><standard-search-result /> </transition>
            </vl-column>
          </vl-grid>
        </vl-infoblock>
      </vl-column>
      <vl-column>
        <vl-infoblock icon="list" title="Standaarden per status">
          <vl-drawers id="standards-drawer">
            <vl-drawer label="Erkende standaarden" width="4" width-m="12">
              <standards-table :standards="standards" />
            </vl-drawer>
            <vl-drawer label="Kandidaat standaarden" width="4" width-m="12">
              <standards-table :standards="standards" />
            </vl-drawer>
            <vl-drawer
              label="Standaarden in ontwikkeling"
              width="4"
              width-m="12"
            >
              <standards-table :standards="standards" />
            </vl-drawer>
          </vl-drawers>
        </vl-infoblock>
      </vl-column>
    </vl-grid>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      standards: []
    }
  },
  async fetch() {
    const data = await this.$content('standards')
      .only([
        'naam',
        'categorie',
        'verantwoordelijke_organisatie',
        'type_toepassing',
        'publicatiedatum',
        'file_name'
      ])
      .fetch()

    // TODO: filter standards on type
    this.standards = data
  }
}
</script>
