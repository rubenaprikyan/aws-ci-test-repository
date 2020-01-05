'use strict';

const Koa = require('koa');
const Router = require('koa-router');
const http = require('http');

const router = new Router({
    prefix: '/test'
});

router.get('/deploy', (ctx) => {
    ctx.body = "congrats deployed!!!"
});

router.get('/build', (ctx) => {
    ctx.body = "congrats build!!!"
});

router.get('/build-test', (ctx) => {
    ctx.body = "congrats build-test!!!"
});

const App = new Koa();

App.use(router.routes());

http.createServer(App.callback()).listen(8080, () => console.info("listen"));



