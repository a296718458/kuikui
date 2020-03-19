import Hello from './hello'
import IIcon from './icon'
import Tree from './tree'

const components = {
    Hello,
    IIcon,
    Tree
}

const install = function (Vue) {
    Object.values(components).forEach(component => {
        Vue.component(component.name, component);
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    Hello,
    IIcon,
    Tree
}
