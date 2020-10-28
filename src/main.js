import Vue from 'vue';
import App from './App.vue';
import store from "./store/store";
import router from './router/route';
import VueI18n from 'vue-i18n';

Vue.config.productionTip = false;

import {
    i18n,
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
    VlInputField,
    VlButton,
    VlDrawers,
    VlDrawer,
    VlSpotlight,
    VlAlert,
    VlActionGroup
} from '@govflanders/vl-ui-vue-components';
import {initializeStore} from "./store/storeInitializer";

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
Vue.component('vl-button', VlButton);
Vue.component('vl-drawers', VlDrawers);
Vue.component('vl-drawer', VlDrawer);
Vue.component('vl-spotlight', VlSpotlight);
Vue.component('vl-alert', VlAlert);
Vue.component('vl-action-group', VlActionGroup);

Vue.use(VueI18n);

const messages = i18n;
const vlI18n = new VueI18n({
    locale: 'nl-BE',
    messages,
});
Vue.use(vlI18n);
Vue.use(VlCore);
Vue.use(VlUtil);

initializeStore().then(() => {
    new Vue({
        store,
        router,
        render: h => h(App),
    }).$mount('#app')
});


