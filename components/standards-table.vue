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
          <a :href="'/standard/' + standard.file_name">
            {{ standard.naam }}
          </a>
        </td>
        <td>
          {{ standard.categorie }}
        </td>
        <td>
          {{ standard.verantwoordelijke_organisatie }}
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
