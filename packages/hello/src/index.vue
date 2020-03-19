<template>
    <div class="kuik-hello">
        <h2>Hello,{{name}}!</h2>
    </div>
</template>

<script>
    export default {
        name: "Hello",
        props: {
            name: {
                type: String,
                default: 'kuik-ui'
            }
        }
    }
</script>

<style scoped>

</style>
