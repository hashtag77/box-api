/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';

// window.Vue = require('vue');
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import 'vuetify/dist/vuetify.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
window.moment = require('moment');
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css';

import moment from 'moment'

Vue.use(VueRouter);
const vuetify = new Vuetify();

Vue.use(vuetify)
// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.use(VueFlashMessage);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

require('./components');

import router from './routes';
// import store from './store';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    // store,
    vuetify
});
