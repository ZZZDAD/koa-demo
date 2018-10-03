import jwt from 'jsonwebtoken'
import {
	jwtSecrect
} from '../config';


export function getToken(username) {
	return jwt.sign({
		username: username
	}, jwtSecrect, {
		expiresIn: '1h'
	})
}