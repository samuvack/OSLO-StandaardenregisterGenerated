<template>
  <vl-grid mod-stacked>
    <vl-column width="4">
      <vl-infotext
        :key="numberOfConfiguredStandards"
        :value="numberOfConfiguredStandards.toString()"
        text="standaarden zijn geconfigureerd"
      />
    </vl-column>
    <vl-column width="4">
      <vl-infotext
        :key="numberOfTerms"
        :value="numberOfTerms.toString()"
        text="termen zijn gedefinieerd in de standaarden"
      />
    </vl-column>
    <vl-column width="4">
      <vl-infotext
        :key="missingReports"
        :value="missingReports.toString()"
        text="hebben geen of onvolledige statistiek"
      />
    </vl-column>
    <vl-column width="6">
      <vl-infotext
        :key="uniqueContributors"
        :value="uniqueContributors.toString()"
        text="mensen hielpen mee aan onze standaarden"
      />
    </vl-column>
    <vl-column width="6">
      <vl-infotext
        :key="uniqueAffiliations"
        :value="uniqueAffiliations.toString()"
        text="verschillende organisaties waren vertegenwoordigd"
      />
    </vl-column>
  </vl-grid>
</template>

<script>
export default {
  data: () => {
    return {
      numberOfTerms: 0,
      numberOfConfiguredStandards: 0,
      missingReports: 0,
      uniqueContributors: 0,
      uniqueAffiliations: 0
    }
  },
  async fetch() {
    const data = await this.$content('statistics')
      .only([
        'numberOfTerms',
        'numberOfStandardsConfigured',
        'reportsMissing',
        'uniqueContributors',
        'uniqueAffiliations'
      ])
      .fetch()

    this.numberOfTerms = data.numberOfTerms
    this.numberOfConfiguredStandards = data.numberOfStandardsConfigured
    this.missingReports = data.reportsMissing
    this.uniqueContributors = data.uniqueContributors
    this.uniqueAffiliations = data.uniqueAffiliations
  }
}
</script>

<style lang="scss">
.vl-infotext {
  color: #0055cc;
}
</style>
