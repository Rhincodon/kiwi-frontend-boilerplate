<template>
    <div class="text-center">
        Frontend Template
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