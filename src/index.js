import Koa from 'koa'
// import Router from '@koa/router'
import blogRouter from "../src/routes/blogs.js";
import bodyParser from 'koa-bodyparser'
import dotenv from 'dotenv'
import cors from "@koa/cors";

dotenv.config()

const app = new Koa()
// const router = new Router()
const Port = process.env.PORT
const DIRECTUS_URL = process.env.DIRECTUS_URL
console.log(DIRECTUS_URL)

app.use(bodyParser())
app.use(cors())

// router.get('/', async (ctx) => {
//     ctx.body = "Hello world"
// })

app.use(blogRouter.routes());
app.use(blogRouter.allowedMethods())

app.listen(Port, ()=> console.log(`App listen at port ${Port}`))