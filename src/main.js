import Vue from 'vue';
import App from './App.vue';
import store from "./store/store";
import {initializeStore} from "./store/storeInitializer";

Vue.config.productionTip = false;


import {
    VlCore,
    VlUtil,
    VlIntroduction,
    VlLayout,
    VlRegion,
    VlDataTable,
    VlTitle,
    VlInfotext,
    VlGrid,
    VlColumn,
    VlDropdownNavigation,
    VlLinkList,
    VlLinkListItem,
    VlLink,
    VlCheckbox,
    VlInfoblock,
    VlInputField
} from '@govflanders/vl-ui-vue-components';

Vue.component('vl-region', VlLayout);
Vue.component('vl-layout', VlRegion);
Vue.component('vl-introduction', VlIntroduction);
Vue.component('vl-data-table', VlDataTable);
Vue.component('vl-title', VlTitle);
Vue.component('vl-infotext', VlInfotext);
Vue.component('vl-grid', VlGrid);
Vue.component('vl-column', VlColumn);
Vue.component('vl-dropdown-navigation', VlDropdownNavigation);
Vue.component('vl-link-list', VlLinkList);
Vue.component('vl-link-list-item', VlLinkListItem);
Vue.component('vl-link', VlLink);
Vue.component('vl-checkbox', VlCheckbox);
Vue.component('vl-infoblock', VlInfoblock);
Vue.component('vl-input-field', VlInputField);

Vue.use(VlCore);
Vue.use(VlUtil);

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
