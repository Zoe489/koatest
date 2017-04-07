const koa = require('koa');

const app = koa();

app.use((ctx) => {
  ctx.body = 'Hello World!';
});

app.listen(3000);
