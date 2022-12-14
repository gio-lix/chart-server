import {readFileSync} from "fs"

import Koa from "koa"
import Router from "koa-router"

import json from "koa-json"
import cors from "@koa/cors"
import serve from "koa-static"

const app = new Koa()
const router = new Router()

app.use(cors());
app.use(json())

app.use(serve('.'));


router.get('/',  (ctx) => {
    const readStream = readFileSync('./data.json','utf8');
    ctx.body = readStream;
});




app.use(router.routes()).use(router.allowedMethods());

const PORT = 9008
app.listen(PORT, () => {
    console.log(`connecting post ${PORT}`)
})

