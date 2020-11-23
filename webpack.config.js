/*
 * @Author: zym
 * @Date: 2020-11-20 16:42:17
 * @LastEditors: zym
 * @LastEditTime: 2020-11-23 09:38:25
 * @Description: edit
 */
const path = require('path')
module.exports = {
  entry: './cf_index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'worker.js',
  }
}
