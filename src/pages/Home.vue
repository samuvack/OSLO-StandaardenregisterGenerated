<template>
    <div>
        <vl-region>
            <vl-layout>
                <vl-introduction>
                    Dit standaardenregister geeft een overzicht van alle lopende en afgewerkte trajecten die deel
                    uitmaken van het
                    initiatief Open Standaarden voor Linkende Organisaties (OSLO) van de Vlaamse overheid.
                </vl-introduction>
            </vl-layout>
        </vl-region>
        <vl-region>
            <vl-layout>
                <vl-grid class="vl-grid--align-center" mod-stacked>
                    <vl-column width="3">
                        <div class="vl-infotext-wrapper">
                            <div class="vl-infotext vl-infotext--badge">
                                <a href="#erkendeStandaarden">
                                    <div class="vl-infotext__value" data-vl-infotext-value>
                                        {{erkendeStandaarden.length}}
                                    </div>
                                    <div class="vl-infotext__text">Erkende standaarden</div>
                                </a>
                            </div>
                        </div>
                    </vl-column>
                    <vl-column width="3">
                        <div class="vl-infotext-wrapper">
                            <div class="vl-infotext vl-infotext--badge">
                                <a href="#kandidaatStandaarden">
                                    <div class="vl-infotext__value" data-vl-infotext-value>
                                        {{kandidaatStandaarden.length}}
                                    </div>
                                    <div class="vl-infotext__text">Kandidaat standaarden</div>
                                </a>
                            </div>
                        </div>
                    </vl-column>
                    <vl-column width="3">
                        <div class="vl-infotext-wrapper">
                            <div class="vl-infotext vl-infotext--badge">
                                <a href="#standaardenInOntwikkeling">
                                    <div class="vl-infotext__value" data-vl-infotext-value>
                                        {{standaardInOntwikkeling.length}}
                                    </div>
                                    <div class="vl-infotext__text">Standaarden in ontwikkeling</div>
                                </a>
                            </div>
                        </div>
                    </vl-column>
                </vl-grid>
                <vl-grid class="vl-grid--align-center">
                    <vl-column width="3">
                        <div class="vl-infotext-wrapper">
                            <div class="vl-infotext vl-infotext--badge">
                                <a href="#">
                                    <div class="vl-infotext__value" data-vl-infotext-value>
                                        {{uniqueContributors}}
                                    </div>
                                    <div class="vl-infotext__text">mensen hielpen mee</div>
                                </a>
                            </div>
                        </div>
                    </vl-column>
                    <vl-column width="3">
                        <div class="vl-infotext-wrapper">
                            <div class="vl-infotext vl-infotext--badge">
                                <a href="#">
                                    <div class="vl-infotext__value" data-vl-infotext-value>
                                        {{uniqueAffiliations}}
                                    </div>
                                    <div class="vl-infotext__text">organisaties waren vertegenwoordigd</div>
                                </a>
                            </div>
                        </div>
                    </vl-column>
                </vl-grid>
            </vl-layout>
        </vl-region>
        <vl-layout>
            <vl-grid>
                <vl-column>
                    <vl-button @click="$router.push({name:'statistics'})">
                        Ontdek hier meer statistieken
                    </vl-button>
                </vl-column>
            </vl-grid>
        </vl-layout>
        <vl-region>
            <vl-layout>
                <p>Overheden op lokaal, Vlaams, interfederaal en Europees niveau moeten in het kader van hun
                    dienstverlening vaak samenwerken. In praktijk moeten bijgevolg heel wat gegevens uitgewisseld worden
                    tussen de verschillende administraties. Deze gegevens zijn afkomstig uit verschillende systemen,
                    zijn mogelijks niet in
                    hetzelfde technische formaat beschikbaar, en volgen niet noodzakelijk dezelfde semantiek. Zonder het
                    maken van afspraken,
                    wordt kwaliteitsvolle gegevensuitwisseling onmogelijk. Dit onderstreept het belang van de
                    ontwikkeling van datastandaarden.
                    De verschillende standaarden kunnen onderverdeeld worden op basis van waar ze zich bevinden in de
                    levenscyclus, namelijk:
                </p>
            </vl-layout>
        </vl-region>
        <vl-region>
            <vl-layout>
                <ul>
                    <li><strong>Erkende standaarden</strong>: werden na het doorlopen van een erkenningsprocedure
                        goedgekeurd door de Werkgroep Datastandaarden van het Stuurorgaan Vlaams Informatie- en
                        ICT-beleid als standaard binnen de Vlaamse overheid.
                    </li>
                    <li><strong>Kandidaat-standaarden</strong>: een stabiele specificatie voor de standaard werd
                        ontwikkeld, aan de hand van een publieke reviewperiode wordt implementatie-ervaring opgedaan en
                        feedback van buiten de thematische werkgroep verzameld.
                    </li>
                    <li><strong>Standaarden in ontwikkeling</strong>: werden reeds aangemeld bij de Werkgroep
                        Datastandaarden en worden uitgewerkt door een thematische werkgroep aan de hand van publieke
                        werksessies.
                    </li>
                </ul>
            </vl-layout>
        </vl-region>
        <vl-region>
            <vl-layout>
                <p>
                    Bij de ontwikkeling van een datastandaard is het van belang om de verschillende stakeholders te
                    aligneren, ook binnen de hiërarchie
                    van een organisatie. Om dit draagvlak bij de verschillende belanghebbenden te kunnen garanderen, is
                    vanuit OSLO een
                    <a href="https://data.vlaanderen.be/cms/Proces_en_methode_voor_de_erkenning_van_datastandaarden_v1.0.pdf">ontwikkelproces</a>
                    uiteengezet, gebaseerd op internationale best practices zoals onder meer ISA, W3C en OpenStand.
                    Het proces en de methode zijn geënt op principes van openheid en transparantie, het stimuleren van
                    hoge betrokkenheid,
                    en het bieden van de nodige garanties op vlak van stabiliteit, kwaliteit en toepasbaarheid.
                    Bovendien bestaan standaarden in een wijzigende omgeving, en dient er dus ruimte te zijn voor
                    beheerde wijzigingen en onderhoud van de
                    afspraken en standaarden.
                </p>
            </vl-layout>
        </vl-region>

        <vl-layout>
            <vl-grid mod-stacked>
                <vl-column width="2">
                    <vl-title tag-name="h4">
                        <label for="searchInput">Zoek standaard</label>
                    </vl-title>
                </vl-column>
                <vl-column width="4">
                    <vl-input-field v-model="keywords" placeholder="Voer de naam in van de standaard die je zoekt"
                                    id="searchInput"
                                    name="searchInput"
                                    @keyup.enter.native="filterWithKeywords"/>
                </vl-column>
                <vl-column width="6">
                    <vl-action-group>
                        <vl-button @click="filterWithKeywords">Zoek</vl-button>
                        <vl-button @click="reset">Reset</vl-button>
                    </vl-action-group>
                </vl-column>
                <vl-column width="2">
                    <vl-title tag-name="h4">
                        Filter standaarden
                    </vl-title>
                </vl-column>
                <vl-column width="10">
                    <vl-grid mod-stacked>
                        <vl-column width="6">
                            <vl-checkbox id="switchAll"
                                         name="switchAll"
                                         v-model="filterAll"
                                         v-on:input="onSwitch('all')"
                                         mod-switch>
                                Alle standaarden
                            </vl-checkbox>
                        </vl-column>
                        <vl-column width="6">
                            <vl-checkbox id="switchVocAp"
                                         name="switchVocAp"
                                         v-model="filterVocAp"
                                         v-on:input="onSwitch('vocap')"
                                         mod-switch>
                                Vocabularium & Applicatieprofielen
                            </vl-checkbox>
                        </vl-column>
                        <vl-column width="6">
                            <vl-checkbox id="switchTechnical"
                                         name="switchTechnical"
                                         v-model="filterTechnical"
                                         v-on:input="onSwitch('technical')"
                                         mod-switch>
                                Technische standaarden
                            </vl-checkbox>
                        </vl-column>
                        <vl-column width="6">
                            <vl-checkbox id="switchIoP"
                                         name="switchIoP"
                                         v-model="filterOrgIoP"
                                         v-on:input="onSwitch('organizational')" mod-switch>
                                Standaarden voor organisatorische interoperabiliteit
                            </vl-checkbox>
                        </vl-column>
                    </vl-grid>
                </vl-column>

            </vl-grid>
        </vl-layout>

        <vl-layout>
            <vl-infoblock mod-type="publications"
                          title="Erkende standaarden" id="erkendeStandaarden">
                <div v-if="this.erkendeStandaarden.length" class="vl-u-table-overflow">
                    <vl-data-table id="erkendeStandaardenTable" mod-hover>
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
                        <tr v-for="object in erkendeStandaarden">
                            <td><a :href="'/standaarden/erkende-standaard/' + object.path">{{object.title}}</a></td>
                            <td v-if="object.about.indexOf('&amp;') >= 0">
                                {{object.about.replace('amp;', '')}}
                            </td>
                            <td v-else>{{object.about}}</td>
                            <td><a :href=object.organisationID>{{object.organisation}}</a></td>
                            <td>{{object.type}}</td>
                            <td>{{object.datePublished}}</td>
                        </tr>
                        </tbody>
                    </vl-data-table>
                </div>
                <div v-else>
                    <vl-title tag-name="h5">Er zijn op dit moment geen erkende standaarden</vl-title>
                </div>
            </vl-infoblock>
        </vl-layout>

        <vl-layout>
            <vl-infoblock mod-type="publications"
                          title="Kandidaat standaarden" id="kandidaatStandaarden">
                <div v-if="this.kandidaatStandaarden.length" class="vl-u-table-overflow">
                    <vl-data-table id="kandidaatStandaardenTable" mod-hover>
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
                        <tr v-for="object in kandidaatStandaarden">
                            <td><a :href="'/standaarden/kandidaat-standaard/' + object.path">{{object.title}}</a></td>
                            <td v-if="object.about.indexOf('&amp;') >= 0">
                                {{object.about.replace('amp;', '')}}
                            </td>
                            <td v-else>{{object.about}}</td>
                            <td><a :href=object.organisationID>{{object.organisation}}</a></td>
                            <td>{{object.type}}</td>
                            <td>{{object.datePublished}}</td>
                        </tr>
                        </tbody>
                    </vl-data-table>
                </div>
                <div v-else>
                    <vl-title tag-name="h5">Er zijn op dit moment geen kandidaat standaarden</vl-title>
                </div>
            </vl-infoblock>
        </vl-layout>

        <vl-layout>
            <vl-infoblock mod-type="publications"
                          title="Standaarden in ontwikkeling" id="standaardenInOntwikkeling">
                <div v-if="this.standaardInOntwikkeling.length" class="vl-u-table-overflow">
                    <vl-data-table id="ontwikkelingTable" mod-hover>
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
                        <tr v-for="object in standaardInOntwikkeling">
                            <td><a :href="'/standaarden/standaard-in-ontwikkeling/' + object.path">{{object.title}}</a></td>
                            <td v-if="object.about.indexOf('&amp;') >= 0">
                                {{object.about.replace('amp;', '')}}
                            </td>
                            <td v-else>{{object.about}}</td>
                            <td><a :href=object.organisationID>{{object.organisation}}</a></td>
                            <td>{{object.type}}</td>
                            <td>{{object.datePublished}}</td>
                        </tr>
                        </tbody>
                    </vl-data-table>
                </div>
                <div v-else>
                    <vl-title tag-name="h5">Er zijn op dit moment geen standaarden in ontwikkeling</vl-title>
                </div>
            </vl-infoblock>
        </vl-layout>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                erkendeStandaarden: this.$store.state.acknowledgedStandards,
                kandidaatStandaarden: this.$store.state.candidateStandards,
                standaardInOntwikkeling: this.$store.state.standardsInDevelopment,
                uniqueAffiliations: this.$store.state.uniqueAffiliations,
                uniqueContributors: this.$store.state.uniqueContributors,
                keywords: "",
                filterAll: true,
                filterVocAp: false,
                filterTechnical: false,
                filterOrgIoP: false,
                filters: []
            }
        },
        methods: {
            filterWithKeywords() {
                const keys = this.keywords.split(' ');
                if (keys.length) {
                    // Set all switch buttons to false
                    this.turnSwitchesOff();

                    // Filter all tables
                    this.filterTableRows(document.getElementById('erkendeStandaardenTable'), keys);
                    this.filterTableRows(document.getElementById('kandidaatStandaardenTable'), keys);
                    this.filterTableRows(document.getElementById('ontwikkelingTable'), keys);
                }
            },
            filterTableRows(table, keys) {
                if (table) {
                    const rows = table.getElementsByTagName('tr');

                    for (let row of rows) {
                        const td = row.getElementsByTagName('td')[0];
                        if (td) {
                            const title = td.getElementsByTagName('a')[0].innerHTML;
                            let display = true
                            for (let key of keys) {
                                if (title.toLowerCase().indexOf(key.toLowerCase()) < 0) {
                                    display = false;
                                }
                            }

                            row.style.display = display ? "" : "none";
                        }
                    }
                }
            },
            applySwitchFilters(filters) {
                this.filterRowsWithFilter(document.getElementById("erkendeStandaardenTable"), filters);
                this.filterRowsWithFilter(document.getElementById("kandidaatStandaardenTable"), filters);
                this.filterRowsWithFilter(document.getElementById("ontwikkelingTable"), filters);

            },
            filterRowsWithFilter(table, filters) {
                if (table) {
                    const rows = table.getElementsByTagName('tr');

                    for (let row of rows) {
                        const td = row.getElementsByTagName('td')[1];
                        if (td) {
                            const category = td.innerHTML;
                            let display = false;
                            for (let filter of filters) {
                                if (category.toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                                    display = true;
                                }
                            }

                            row.style.display = display ? "" : "none";
                        }
                    }
                }
            },
            reset() {
                this.keywords = '';
                this.filterAll = true;
                this.displayAllRows(document.getElementById("erkendeStandaardenTable"));
                this.displayAllRows(document.getElementById("kandidaatStandaardenTable"));
                this.displayAllRows(document.getElementById("ontwikkelingTable"));
            },
            displayAllRows(table) {
                if (table) {
                    const rows = table.getElementsByTagName('tr');
                    for (let row of rows) {
                        row.style.display = "";
                    }
                }
            },
            turnSwitchesOff() {
                this.filterAll = false;
                this.filterVocAp = false;
                this.filterTechnical = false;
                this.filterOrgIoP = false;
            },
            onSwitch: function (switchName) {
                // From the moment a checkbox was clicked, was erase the input values
                this.keywords = '';

                // Switch case to determine true/false value of the buttons
                switch (switchName) {
                    case 'all':
                        // All button was turned on
                        if (this.filterAll) {
                            this.filterVocAp = false;
                            this.filterTechnical = false;
                            this.filterOrgIoP = false;
                            this.reset();
                        }
                        break;
                    case 'vocap':
                        if (this.filterVocAp) {
                            this.filterAll = false;
                        }
                        break;
                    case 'technical':
                        if (this.filterTechnical) {
                            this.filterAll = false;
                        }
                        break;
                    case 'organizational':
                        if (this.filterOrgIoP) {
                            this.filterAll = false;
                        }
                        break;
                }

                // Determine what filters are enabled
                let filters = [];
                if (this.filterVocAp) {
                    filters.push('Vocabularium &amp; applicatieprofielen')
                }

                if (this.filterTechnical) {
                    filters.push('Technische standaard')
                }

                if (this.filterOrgIoP) {
                    filters.push('Organisatorische interoperabiliteit');
                }

                if (filters.length) {
                    this.applySwitchFilters(filters);
                }
            }
        },
        watch: {
            /*keywords: function () {
                if (this.keywords === '') {
                    this.reset();
                }
            }*/
        }
    }
</script>

<style lang="scss">

</style>
