import Hello from './src/index.vue'

// install 是默认的方法,供按需引入。
// 当外界在 use 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。

Hello.install = function(Vue){
    Vue.component(Hello.name, Hello)
}

export default Hello
