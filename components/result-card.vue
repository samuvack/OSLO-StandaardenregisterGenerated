<template>
  <vl-accordion :id="'accordion-' + name" :title="name" :hash-change="false">
    <vl-grid mod-stacked>
      <vl-column v-if="contributors" width="6">
        <vl-spotlight
          mod-large
          :title="totalPeople"
          subtitle="mensen hielpen mee aan deze standaard"
        >
        </vl-spotlight>
      </vl-column>
      <vl-column v-if="contributors" width="6">
        <vl-spotlight
          :title="contributors.length.toString()"
          subtitle="organisaties hielpen mee"
          mod-large
        />
      </vl-column>
      <vl-column v-else>
        <p>Geen cijfers bekend voor deze standaard</p>
      </vl-column>
      <vl-column>
        <vl-data-table mod-hover>
          <caption>
            Aantal deelnemers per organisatie
          </caption>
          <thead>
            <tr>
              <th>Organisatie</th>
              <th>Aantal deelnemers</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="contributor of contributors"
              :key="contributor.affiliation"
            >
              <td>{{ contributor.affiliation }}</td>
              <td>{{ contributor.count.toString() }}</td>
            </tr>
          </tbody>
        </vl-data-table>
      </vl-column>
    </vl-grid>
  </vl-accordion>
</template>

<script>
export default {
  props: {
    contributors: Array,
    totalPeople: String,
    name: String
  }
}
</script>
