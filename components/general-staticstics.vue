<template>
  <vl-grid mod-stacked>
    <vl-column>
      <vl-title tag-name="h2" mod-alt> Algemeen </vl-title>
    </vl-column>
    <vl-column width="4">
      <vl-infotext
        :value="numberOfConfiguredStandards.toString()"
        text="standaarden zijn geconfigureerd"
      />
    </vl-column>
    <vl-column width="4">
      <vl-infotext
        :value="numberOfTerms.toString()"
        text="termen zijn gedefinieerd in de standaarden"
      />
    </vl-column>
    <vl-column width="4">
      <vl-infotext
        :value="missingReports.toString()"
        text="hebben geen of onvolledige statistiek"
      />
    </vl-column>
    <vl-column width="6">
      <vl-infotext
        :value="uniqueContributors.toString()"
        text="mensen hielpen mee aan onze standaarden"
      />
    </vl-column>
    <vl-column width="6">
      <vl-infotext
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
  },
}
</script>
