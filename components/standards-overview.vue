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
            <vl-drawer label="Erkende standaarden" width="3" width-m="12">
              <standards-table :standards="acknowledgedStandards" />
            </vl-drawer>
            <vl-drawer label="Kandidaat standaarden" width="3" width-m="12">
              <standards-table :standards="candidateStandards" />
            </vl-drawer>
            <vl-drawer
              label="Standaarden in ontwikkeling"
              width="3"
              width-m="12"
            >
              <standards-table :standards="runningStandards" />
            </vl-drawer>
            <vl-drawer label="Standaarden zonder status" width="3">
              <standards-table :standards="noStatusStandards" />
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
      acknowledgedStandards: [],
      candidateStandards: [],
      runningStandards: [],
      noStatusStandards: [],
      standards: []
    }
  },
  async fetch() {
    this.acknowledgedStandards = await this.$content('standards', {
      deep: true
    })
      .where({
        extension: '.json',
        status: 'erkende-standaard'
      })
      .sortBy('naam', 'asc')
      .fetch()

    this.candidateStandards = await this.$content('standards', { deep: true })
      .where({ extension: '.json', status: 'kandidaat-standaard' })
      .sortBy('naam', 'asc')
      .fetch()

    this.runningStandards = await this.$content('standards', { deep: true })
      .where({ extension: '.json', status: 'standaard-in-ontwikkeling' })
      .sortBy('naam', 'asc')
      .fetch()

    this.noStatusStandards = await this.$content('standards', { deep: true })
      .where({ extension: '.json', status: 'zonder-status' })
      .sortBy('naam', 'asc')
      .fetch()
  }
}
</script>
