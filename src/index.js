/*
 * @Author: yushijun
 * @Date: 2021-04-01 17:14:57
 * @LastEditors: yushijun
 * @LastEditTime: 2021-04-02 10:32:00
 */
import Button from './components/button/index.js'

const components = [ Button ]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  Button,
  install
}