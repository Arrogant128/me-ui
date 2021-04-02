/*
 * @Author: yushijun
 * @Date: 2021-04-01 17:14:08
 * @LastEditors: yushijun
 * @LastEditTime: 2021-04-02 14:15:42
 */
const path = require('path')
const fs = require('fs')

function getComponents () {
  const componentsPathName = path.join(__dirname, '../src/components')
  let components = {}
  const files = fs.readdirSync(componentsPathName)
  files.forEach(item => {
    components[item] = path.join(__dirname, `../src/components/${item}/index.js`)
  })
  return components
}

module.exports = {
  componentsEntry: getComponents()
}