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
                uniqueAffiliations: this.$store.state.uniqueAffiliations
            }
        },
        methods: {
        },
        async beforeCreate() {
            if (!this.$store.state.storeWasInitialized) {
                await initializeStore();

                this.uniqueContributors = this.$store.state.uniqueContributors;
                this.uniqueAffiliations = this.$store.state.uniqueAffiliations;
            }
            this.$forceUpdate();

        }
    }
</script>

<style lang="scss">

    .vl-infotext {
        color: #0055cc;
    }

</style>
