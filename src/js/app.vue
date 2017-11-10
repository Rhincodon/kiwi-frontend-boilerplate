<template>
    <div class="text-center p-8">
        <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
            Frontend Template
        </button>
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