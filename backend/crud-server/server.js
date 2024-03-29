const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const {koaBody} = require('koa-body');

const app = new Koa();

app.use(cors());
app.use(koaBody({json: true}));

const notes = [];
const messages = [];
let nextId = 1;

const router = new Router();

// ++++++++++++++++++++++++ Notes +++++++++++++++++++++++++ //

router.get('/notes', async (ctx, next) => {
    ctx.response.body = notes;
});

router.post('/notes', async(ctx, next) => {
    let data = JSON.parse(ctx.request.body);
    notes.push({...data, id: nextId++});
    ctx.response.body = {
        status: 'ok'
    };
});

router.delete('/notes/:id', async(ctx, next) => {
    const noteId = Number(ctx.params.id);
    const index = notes.findIndex(o => o.id === noteId);
    if (index !== -1) {
        notes.splice(index, 1);
    }
    ctx.response.body = 204;
});

// +++++++++++++++++++++++ Messages +++++++++++++++++++++++++ //

router.get("/messages", async (ctx, next) => {
    const from = Number(ctx.request.query.from);
    if (ctx.request.query.from === 0) {
      ctx.response.body = messages;
      return;
    }
  
    const fromIndex = messages.findIndex((o) => o.id === from);
    if (fromIndex === -1) {
      ctx.response.body = messages;
      return;
    }
  
    ctx.response.body = messages.slice(fromIndex + 1);
  });
  
  router.post("/messages", async (ctx, next) => {
      let data = JSON.parse(ctx.request.body)
      messages.push({...data, id: nextId++});
      ctx.response.body = {
          status: 'ok'
      }
  });
  

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7777;
const server = http.createServer(app.callback());
server.listen(port, () => console.log('server started'));