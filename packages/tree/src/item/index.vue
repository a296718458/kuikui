<template>
    <section class="tree-item">
        <div class="tree-title" @click="changeState($event)">
            <div class="icon-box">
                <i :class="iconClass" :style="{'font-size':getFontSize}"></i>
            </div>
            <span :style="{'font-size':getFontSize}">{{item.name}}</span>
        </div>
        <ul class="tree-item-child" v-if="item.child.length>0 && itemFlag">
            <li v-for="(item1,index1) in item.child" :key="item1.code + index1">
                <span>{{item1.name}}</span>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: "Item",
        props: ['fontSize','item'],
        data() {
            return {
                itemFlag: false,
                iconClass: 'iconfont icontriangle-right title-icon'
            }
        },
        methods: {
            changeState() {
                this.itemFlag = !this.itemFlag;
                console.log(this.itemFlag?this.item.name + ':open':this.item.name + ':close');
            }
        },
        watch: {
            itemFlag(val) {
                if(val) {
                    this.iconClass= 'iconfont icontriangle-up-copy-copy title-icon';
                } else {
                    this.iconClass= 'iconfont icontriangle-right title-icon';
                }
            }
        },
        computed: {
            getFontSize() {
                if((typeof this.fontSize) === 'number') {
                    return this.fontSize + 'px';
                }
                return this.fontSize;
            }
        }
    }
</script>

<style scoped>
    .tree-item {
        -moz-user-select: none;
        -khtml-user-select: none;
        user-select: none;
    }
    .tree-title {
        cursor: default;
    }
</style>
