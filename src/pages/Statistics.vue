<template>
    <vl-layout>
        <vl-region>
            <vl-button @click="$router.push('/')">Terug</vl-button>
        </vl-region>
        <vl-introduction>
            Op deze pagina vind je allerlei statistieken terug van de OSLO-standaarden.
        </vl-introduction>
        <vl-infoblock mod-type="publications"
                      title="Algemeen" id="general">
            <vl-grid>
                <vl-column width="6">
                    <vl-infotext
                            href="#"
                            :value="uniqueContributors.toString()"
                            text="mensen hielpen mee aan onze standaarden"/>
                </vl-column>
                <vl-column width="6">
                    <vl-infotext
                            href="#"
                            :value="uniqueAffiliations.toString()"
                            text="verschillende organisaties waren vertegenwoordigd"/>
                </vl-column>
            </vl-grid>
        </vl-infoblock>
        <vl-infoblock mod-type="publications"
                      title="Statistieken per standaard" id="detail">
            <vl-drawers id="drawer-1">
                <vl-drawer width="4" width-m="12" v-for="object in statistics" :ket="object.standard" :label="object.standard">
                    <vl-grid class="vl-grid--align-center" mod-stacked>
                        <vl-column width="6">
                            <vl-spotlight mod-large
                                          :title="object.totalPeople.toString()"
                                          subtitle="mensen hielpen mee aan deze standaard">
                            </vl-spotlight>
                        </vl-column>
                        <vl-column width="6">
                            <vl-spotlight :title="object.contributors.length.toString()"
                                          subtitle="organisaties hielpen mee"
                                          mod-large/>
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
                                <tr v-for="contributor of object.contributors" :key="contributor.affiliation">
                                    <td>{{contributor.affiliation}}</td>
                                    <td>{{contributor.count}}</td>
                                </tr>
                                </tbody>
                            </vl-data-table>
                        </vl-column>
                    </vl-grid>
                </vl-drawer>
            </vl-drawers>

        </vl-infoblock>
        <vl-infoblock mod-type="publications"
                      title="Statistieken per jaar" id="annual">
            Binnenkort meer info.
        </vl-infoblock>
    </vl-layout>
</template>

<script>
    import {initializeStore} from "../store/storeInitializer";

    export default {
        name: "Statistics",
        data() {
            return {
                uniqueContributors: this.$store.state.uniqueContributors,
                uniqueAffiliations: this.$store.state.uniqueAffiliations,
                statistics: this.$store.state.statistics
            }
        }
    }
</script>

<style lang="scss">
    .vl-infotext {
        color: #0055cc;
    }

</style>
