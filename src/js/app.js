window.vueApp = new Vue({
    el: '#app',
    mounted() {
        this.$nextTick(() => {
            console.log('App DOM Ready');
        });
    }
});