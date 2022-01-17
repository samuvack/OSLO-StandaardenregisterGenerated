<template>
  <vl-grid mod-stacked>
    <vl-column width="4">
      <vl-infotext
        :key="numberOfAcknowledgedStandards"
        :value="numberOfAcknowledgedStandards.toString()"
        text="Erkende standaarden"
      />
    </vl-column>
    <vl-column width="4">
      <vl-infotext
        :key="numberOfCandidateStandards"
        :value="numberOfCandidateStandards.toString()"
        text="Kandidaat standaarden"
      />
    </vl-column>
    <vl-column width="4">
      <vl-infotext
        :key="numberOfRunningStandards"
        :value="numberOfRunningStandards.toString()"
        text="Standaarden in ontwikkeling"
      />
    </vl-column>
    <vl-column width="6">
      <vl-infotext
        :key="uniqueContributors"
        :value="uniqueContributors.toString()"
        text="Mensen hielpen mee"
      />
    </vl-column>
    <vl-column width="6">
      <vl-infotext
        :key="uniqueAffiliations"
        :value="uniqueAffiliations.toString()"
        text="Organisaties waren vertegenwoordigd"
      />
    </vl-column>
  </vl-grid>
</template>

<script>
export default {
  data: () => {
    return {
      numberOfAcknowledgedStandards: 0,
      numberOfCandidateStandards: 0,
      numberOfRunningStandards: 0,
      uniqueAffiliations: 0,
      uniqueContributors: 0
    }
  },
  async fetch() {
    const data = await this.$content('statistics')
      .only(['uniqueContributors', 'uniqueAffiliations'])
      .fetch()

    this.uniqueContributors = data.uniqueContributors
    this.uniqueAffiliations = data.uniqueAffiliations
  },
  mounted() {
    this.$root.$on('onAcknowledgedStandardsUpdate', (data) => {
      this.numberOfAcknowledgedStandards = data
    })

    this.$root.$on('onCandidateStandardsUpdate', (data) => {
      this.numberOfCandidateStandards = data
    })

    this.$root.$on('onRunningStandardsUpdate', (data) => {
      this.numberOfRunningStandards = data
    })
  }
}
</script>
