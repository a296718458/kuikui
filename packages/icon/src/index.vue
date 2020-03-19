<template>
    <i :class="'iconfont ' + name"></i>
</template>

<script>
    export default {
        name: "IIcon",
        props: {
            name: String
        }
    }
</script>

<style scoped>

</style>
