import Vue from 'vue'
import VueRouter from 'vue-router'
const axios = require('axios');

window.Vue = Vue;
window.$http = axios.create({
    baseURL: 'http://localhost:3000',
});

Vue.use(VueRouter);

require('./app');