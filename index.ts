const Koa = require('koa');

const app = new Koa();

app.use(async (ctx: any) => {
    ctx.body = 'Hello, world!';
});

app.listen(3000, (res: any, err: unknown) => {
    console.log('app has been started');
    if (err) {
        console.error(err)
    }
});