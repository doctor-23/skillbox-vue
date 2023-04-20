import Vue from 'vue';
import { variableOne, variableTwo } from '@/constants';
import getVariables from '@/utils';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// getVariables(variableOne);
// getVariables(variableTwo);
getVariables(variableOne, variableTwo);
