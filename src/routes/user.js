import Router from 'koa-router';
import User from '../models/users';

const router = new Router()

router
	//	添加用户
	.post('/add', async ctx => {
		const {
			username,
			password
		} = ctx.request.body

		// 数据库添加操作
		const user = await User.create({
			username,
			password
		})
		if (user) {
			// 删除缓存
			ctx.cache.del('userCache')
			ctx.body = {
				code: 200,
				message: 'success',
				data: user
			}
		} else {
			ctx.body = {
				code: 100,
				message: 'error'
			}
		}
	})

	// 获取所有用户
	.get('/get', async ctx => {
		let userArr
		if (!ctx.cache.has('userCache')) {
			// 无该缓存
			userArr = await User.find()
			if (userArr) {
				// 存入缓存
				ctx.cache.set('userCache', userArr)
			} else {
				ctx.body = {
					code: 100,
					message: 'error'
				}
			}
		} else {
			// 获取缓存
			userArr = ctx.cache.get('userCache')
		}
		ctx.body = {
			code: 200,
			message: 'success',
			data: userArr
		}
	})

	// 移除用户
	.post('/remove', async ctx => {
		const {
			_id
		} = ctx.request.body

		const result = await User.deleteOne({
			_id
		})
		if (result) {
			// 删除缓存
			ctx.cache.del('userCache')
			ctx.body = {
				code: 200,
				message: 'success'
			}
		} else {
			ctx.body = {
				code: 100,
				message: 'error'
			}
		}
	})


module.exports = router