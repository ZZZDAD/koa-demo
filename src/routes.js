import Router from 'koa-router';

import login from './routes/login';
import user from './routes/user';

const router = new Router()

export default function (app) {
	router
		.use('/login', login.routes(), login.allowedMethods())
		.use('/user', user.routes(), user.allowedMethods())

	app
		.use(router.routes())
		.use(router.allowedMethods({
			throw: true
		}))
}