'use strict';

const koa = require('koa');

const app = koa();

app.use(function *() {
  this.body = 'Hello World!';
});

app.listen(3000);

// 初步怀疑是因为 koa2 的原因，就像当时 vue1 和 vue2一样，现在我先引入 koa1，可以先
// 执行 「npm uninstall koa」，然后「npm i」安装此时 package 的 koa 1.2.4
// ESLint 有一些报错的语法先不管它，先用这一套代码检查吧
// 初步试了一下，「node --harmony app.js」和「node app.js」，效果是一样的，然后从网上一查，
// iojs 居然和 nodejs 又合并了，这样的话，两边的特性就是一样的了，所以，安装 iojs 会报错
// 因为已经安装了嘛
// 今天给的视频很老了，node 的版本才 零点几，现在都 六点几了，
// 要明白，第一个数字升级的差别是非常大的
// 一起加油哟~~~~
