<template>
    <div class="text-center text-lg">
        Frontend Template
        <span class="retina-icon"></span>
    </div>
</template>

<script type="text/babel">
    export default {
        mounted() {
            this.$nextTick(() => {
                console.log('App DOM Ready');
            });
        }
    }
</script>