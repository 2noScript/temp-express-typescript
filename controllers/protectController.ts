import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'
import { SECRET_KEY } from '../env'

class ProtectController {
	EXPIRE_TIME: number = 6 * 60 * 60 * 1000 //6 hour
	generatorAccessToken = (req: Request, res: Response, next: NextFunction) => {
		const { name, password } = req.body

		const accessToken = jwt.sign(
			{
				name,
				password,
			},
			SECRET_KEY!,
			{
				expiresIn: this.EXPIRE_TIME,
			}
		)
		res.json({
			accessToken,
			expiresTime: this.EXPIRE_TIME,
		})
	}

	verifyAccessToken = (req: Request, res: Response, next: NextFunction) => {
		const authorizationHeader = req.headers['authorization']
		const token = authorizationHeader?.replace('Bearer', '').trim()
		jwt.verify(token!, SECRET_KEY!, (err, data) => {
			err ? res.sendStatus(401) : next()
		})
	}
}

export const protectController = new ProtectController()
