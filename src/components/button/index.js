/*
 * @Author: yushijun
 * @Date: 2021-04-01 17:28:44
 * @LastEditors: yushijun
 * @LastEditTime: 2021-04-02 14:46:42
 */
import YButton from './button'

YButton.install = function (Vue) {
  Vue.component(YButton.name, YButton)
}

export default YButton