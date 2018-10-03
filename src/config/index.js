// server端口
export const port = 3000

// jwt密钥
export const jwtSecrect = 'jwt_auth'

// cors跨域
export const corsOptions = {
	"origin": "*",
	"methods": "GET, POST",
	"credentials": true
}

// cache缓存
export const lruOptions = {
	max: 1000,
	maxAge: 1000 * 60 * 30
}