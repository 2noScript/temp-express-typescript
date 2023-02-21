import e, { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { addAbortSignal } from 'stream'

class AuthController {
	constructor() {}

	self = (req: Request, res: Response, next: NextFunction) => {
		res.send('you need to login')
	}

	authentication = (req: Request, res: Response, next: NextFunction) => {
		const { name, password } = req.body
		if (name === 'x' && password === 'y') {
			//handle
			next()
		} else {
			res.sendStatus(406)
		}
	}

	logout = (req: Request, res: Response, next: NextFunction) => {
		res.send('logout')
	}
}

export const authController = new AuthController()
