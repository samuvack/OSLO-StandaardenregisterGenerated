<template>
  <vl-data-table mod-hover>
    <thead>
      <tr>
        <th>Titel</th>
        <th>Categorie</th>
        <th>Verantwoordelijke organisatie</th>
        <th>Type toepassing</th>
        <th>Publicatiedatum</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="standard of standards" :key="standard.naam">
        <td>
          <a :href="standard.dir">
            {{ standard.naam }}
          </a>
        </td>
        <td>
          {{ standard.categorie }}
        </td>
        <td>
          <p v-if="typeof standard.verantwoordelijke_organisatie === 'string'">
            <a target="_blank" :href="standard.identificator_organisatie">
              {{ standard.verantwoordelijke_organisatie }}
            </a>
          </p>
          <p
            v-for="(item, index) in standard.verantwoordelijke_organisatie"
            v-else
            :key="item"
          >
            <a
              target="_blank"
              :href="standard.identificator_organisatie[index]"
            >
              {{ standard.verantwoordelijke_organisatie[index] }}
            </a>
          </p>
        </td>
        <td>
          {{ standard.type_toepassing }}
        </td>
        <td>
          {{ standard.publicatiedatum }}
        </td>
      </tr>
    </tbody>
  </vl-data-table>
</template>

<script>
export default {
  props: {
    standards: Array
  }
}
</script>
