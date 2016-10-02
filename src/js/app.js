window.vueApp = new Vue({
    el: '#app',
    components: {
        question: require('./component.vue')
    },
    mounted() {
        this.$nextTick(() => {
            console.log('App DOM Ready');
            swal("Hi", "There", "success");
        });
    }
});