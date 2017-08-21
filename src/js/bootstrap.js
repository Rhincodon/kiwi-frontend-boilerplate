import Vue from 'vue'
import VueRouter from 'vue-router'
const axios = require('axios');

window.Vue = Vue;
window.$http = axios.create({
    baseURL: 'http://localhost:3000',
});

Vue.use(VueRouter);

const vueApp = require('./app.vue');

new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement(vueApp)
    }
});
