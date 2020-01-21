const Koa = require("koa");
const app = new Koa();

const main = ctx => {
  console.log(ctx.request.query);
  ctx.response.body = "Hello World";
};

console.log("NODE_ENV", process.env.NODE_ENV);
console.log("NAME", process.env.NAME);
console.log("DOCKERFILE_ENV", process.env.DOCKERFILE_ENV);

app.use(main);
app.listen(3000);
