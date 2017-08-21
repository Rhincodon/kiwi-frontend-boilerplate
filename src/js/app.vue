<template>
    <div class="space-in-tall-kilo-xs">
        <p class="text-center">Frontend Template</p>
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