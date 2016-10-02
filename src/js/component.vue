<template>
    <h1>Which Kiwi?</h1>
</template>

<script type="text/babel">
    module.exports = {
        mounted() {
            this.$nextTick(() => {
                console.log('Component DOM Ready');
            });
        }
    };
</script>
