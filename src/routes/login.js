import Router from 'koa-router';
import {
	getToken
} from '../utils/auth';

const router = new Router()

router
	.post('/', async ctx => {
		const {
			username,
			password
		} = ctx.request.body
		
		if (username == 'username' && password == 'password') {
			const token = getToken(username)
			ctx.body = {
				code: 200,
				message: 'success',
				token
			}
		} else {
			ctx.body = {
				code: 100,
				message: 'error'
			}
		}
	})


module.exports = router