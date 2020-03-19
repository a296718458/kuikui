<template>
    <div id="app">
        <Hello :name="name"></Hello>
        <IIcon :name="'icontriangle-right'"></IIcon>
        <IIcon :name="'icontriangle-up-copy-copy'"></IIcon>
        <Tree1 :list="treeList"></Tree1>
    </div>
</template>

<script>
    import Tree1 from './../packages/tree'
    export default {
        name: "App",
        components: {
            Tree1
        },
        data() {
            return {
                name: 'baifuchao',
                treeList: [
                    {
                        name: '测试树1',
                        code: '1',
                        img: null,
                        child: [
                            {
                                name: "测试树1-1",
                                code: '1-1',
                                img: null
                            },
                            {
                                name: "测试树1-2",
                                code: '1-2',
                                img: null
                            }
                        ]
                    },
                    {
                        name: '测试树2',
                        code: '2',
                        img: null,
                        child:[
                            {
                                name: "测试树2-1",
                                code: '2-1',
                                img: null
                            }
                        ]
                    },
                    {
                        name: '测试树3',
                        code: '3',
                        img: null,
                        child: []
                    }
                ]
            }
        }
    }
</script>

<style>

</style>
