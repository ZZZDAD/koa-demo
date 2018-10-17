import Koa from 'koa';
// import path from 'path';
// import serve from 'koa-static';
import convert from 'koa-convert';
import cors from 'koa-cors';
import jwt from 'koa-jwt'
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import LRU from 'lru-cache';
import routes from './routes';
import errorHandle from './middlewares/errorHandle';
import {
	port,
	jwtSecrect,
	corsOptions,
	lruOptions
} from './config';

const app = new Koa()

// context加入cache缓存项
app.context.cache = LRU(lruOptions)

app
	.use(errorHandle)
	.use(bodyParser())
	.use(convert(cors(corsOptions)))
	.use(logger())
	.use(jwt({
		secret: jwtSecrect
	}).unless({
		path: [
			/^\/login/
		]
	}))
// .use(serve(path.join(__dirname, './public')))

routes(app)


app.listen(port, () => {
	console.log(`koa server is starting at port ${port}`)
})