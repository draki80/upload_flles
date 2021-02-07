require('./bootstrap');

window.Vue = require('vue').default;

import Vuetify from '../plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.component('App', require('./App.vue').default);

const app = new Vue({
    vuetify: Vuetify,
    el: '#app',
});
