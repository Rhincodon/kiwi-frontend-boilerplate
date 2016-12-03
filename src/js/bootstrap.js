import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

window.Vue = Vue;

Vue.use(VueResource);
Vue.use(VueRouter);

require('./app');