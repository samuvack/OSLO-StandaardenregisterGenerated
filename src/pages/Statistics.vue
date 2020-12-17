<template>
    <vl-layout>
        <vl-region>
            <vl-button @click="$router.push({name:'home'})">Terug</vl-button>
        </vl-region>
        <vl-introduction>
            Op deze pagina vind je allerlei statistieken terug van de OSLO-standaarden. Deze statistieken zijn louter een indicatie op basis van de data
            die we ter beschikking hebben.
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
                      title="Erkende standaarden per jaar" id="annual">
            <vl-grid mod-stacked>
                <vl-column width="4" v-for="(number, year) in standardsPerYear" :key="year">
                    <vl-infotext href="#"
                                 :value="number.toString()"
                                 :text="'werden erkend in ' + year"/>
                </vl-column>
                <vl-column v-if="standardsPerYear['TBD'] > 0">
                    <vl-alert
                            icon="warning"
                            title="Opmerking"
                            mod-naked
                            mod-warning
                    >
                        Er zijn {{standardsPerYear['TBD']}} erkende standaarden waarvan de publicatiedatum niet bekend is.
                    </vl-alert>
                </vl-column>
            </vl-grid>
            <!--<vl-drawers id="drawer-1">
                <vl-drawer width="4" width-m="12" v-for="(standards, year) in standardsPerYear" :label="year === 'TBD' ? 'Datum nog te bepalen' : year" :key="year">
                    <vl-grid mod-stacked>
                        <vl-column>
                            <vl-spotlight mod-large
                                          :title="standards.length.toString()"
                                          :subtitle="year === 'TBD' ? 'standaarden waarvoor nog geen datum bekend is' : 'standaarden werden gepubliceerd'"/>
                        </vl-column>
                        <vl-column width="4" v-for="standard in standards" :key="standard.standard">
                            <p>{{standard.standard}}</p>
                        </vl-column>
                    </vl-grid>
                </vl-drawer>
            </vl-drawers>-->
        </vl-infoblock>
        <vl-infoblock mod-type="publications"
                      title="Statistieken per standaard" id="detail">
            <vl-drawers id="drawer-2">
                <vl-drawer width="4" width-m="12" v-for="object in statistics" :key="object.standard"
                           :label="object.standard">
                    <vl-grid mod-stacked>
                        <vl-column width="6" v-if="object.contributors">
                            <vl-spotlight mod-large
                                          :title="object.totalPeople.toString()"
                                          subtitle="mensen hielpen mee aan deze standaard">
                            </vl-spotlight>
                        </vl-column>
                        <vl-column width="6" v-if="object.contributors">
                            <vl-spotlight :title="object.contributors.length.toString()"
                                          subtitle="organisaties hielpen mee"
                                          mod-large/>
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
    </vl-layout>
</template>

<script>

    export default {
        name: "Statistics",
        data() {
            return {
                uniqueContributors: this.$store.state.uniqueContributors,
                uniqueAffiliations: this.$store.state.uniqueAffiliations,
                statistics: this.$store.state.statistics,
                standardsPerYear: this.$store.state.standardsPerYear
            }
        }
    }
</script>

<style lang="scss">
    .vl-infotext {
        color: #0055cc;
    }

</style>
