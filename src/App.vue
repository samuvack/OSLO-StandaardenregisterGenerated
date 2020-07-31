<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>

    export default {
        name: 'App',
    }
</script>

<style lang="scss">
    $vl-icon-font-location: "assets/";
    @import "~@govflanders/vl-ui-core/src/scss/core";
    @import "~@govflanders/vl-ui-content-header/src/scss/content-header";
    @import "~@govflanders/vl-ui-introduction/src/scss/introduction";
    @import "~@govflanders/vl-ui-data-table/src/scss/data-table";
    @import "~@govflanders/vl-ui-titles/src/scss/titles";
    @import "~@govflanders/vl-ui-infotext/src/scss/infotext";
    @import "~@govflanders/vl-ui-dropdown-navigation/src/scss/dropdown-navigation";
    @import "~@govflanders/vl-ui-link/src/scss/link";
    @import "~@govflanders/vl-ui-link-list/src/scss/link-list";
    @import "~@govflanders/vl-ui-popover/src/scss/popover";
    @import "~@govflanders/vl-ui-util/src/scss/util";
    @import "~@govflanders/vl-ui-checkbox/src/scss/checkbox";
    @import "~@govflanders/vl-ui-infoblock/src/scss/infoblock";
    @import "~@govflanders/vl-ui-input-field/src/scss/input-field";
    @import "~@govflanders/vl-ui-button/src/scss/button";

    p, ul {
        font-size: 1.8rem;
    }

    #searchInput {
        width: 100%;
    }

</style>
