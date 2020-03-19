<template>
    <div class="kuik-tree">
        <div class="tree-item"  v-for="(item,index) in list" :key="'title' + index">
            <Item :item="item" :fontSize="fontSize"></Item>
        </div>
    </div>
</template>

<script>
    import Item from './item/index.vue'
    export default {
        name: "Tree",
        components: {
            Item
        },
        props: {
            fontSize: {
                type: [Number, String],
                default: 12
            },
            list: {
                type: Array,
                default: []
            }
        },
        methods: {

        }
    }
</script>
