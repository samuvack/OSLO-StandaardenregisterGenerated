/* eslint-disable vue/component-definition-name-casing */
import Vue from 'vue'
import VueI18n from 'vue-i18n'

import {
  i18n,
  VlCore,
  VlUtil,
  VlColumn,
  VlGrid,
  VlLayout,
  VlRegion,
  VlContentHeader,
  VlContentHeaderEntity,
  VlContentHeaderLogo,
  VlIntroduction,
  VlDoormat,
  VlTitle,
  VlModal,
  VlModalToggle,
  VlIcon,
  VlButton,
  VlSpotlight,
  VlInfotext,
  VlInputField,
  VlDrawer,
  VlDrawers,
  VlDataTable,
  VlAccordion,
  VlInfoblock,
  VlDescriptionDataItem,
} from '@govflanders/vl-ui-vue-components'

Vue.component('vl-content-header', VlContentHeader)
Vue.component('vl-content-header-entity', VlContentHeaderEntity)
Vue.component('vl-content-header-logo', VlContentHeaderLogo)
Vue.component('vl-grid', VlGrid)
Vue.component('vl-column', VlColumn)
Vue.component('vl-layout', VlLayout)
Vue.component('vl-region', VlRegion)
Vue.component('vl-introduction', VlIntroduction)
Vue.component('vl-doormat', VlDoormat)
Vue.component('vl-title', VlTitle)
Vue.component('vl-modal', VlModal)
Vue.component('vl-icon', VlIcon)
Vue.component('vl-button', VlButton)
Vue.component('vl-spotlight', VlSpotlight)
Vue.component('vl-infotext', VlInfotext)
Vue.component('vl-input-field', VlInputField)
Vue.component('vl-drawer', VlDrawer)
Vue.component('vl-drawers', VlDrawers)
Vue.component('vl-data-table', VlDataTable)
Vue.component('vl-accordion', VlAccordion)
Vue.component('vl-infoblock', VlInfoblock)
Vue.component('vl-description-data-item', VlDescriptionDataItem)

Vue.use(VlCore)
Vue.use(VlUtil)
Vue.use(VueI18n)
Vue.directive('vl-modal-toggle', VlModalToggle)

const messages = i18n
const vlI18n = new VueI18n({
  locale: 'nl-BE',
  messages,
})

Vue.use(vlI18n)
