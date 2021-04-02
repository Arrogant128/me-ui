/*
 * @Author: yushijun
 * @Date: 2021-04-01 17:28:44
 * @LastEditors: yushijun
 * @LastEditTime: 2021-04-01 17:29:38
 */
import IButton from './button'

IButton.install = function (Vue) {
  Vue.component(IButton.name, IButton)
}

export default IButton