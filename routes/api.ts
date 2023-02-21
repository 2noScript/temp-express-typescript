import express, { NextFunction, Request, Response } from 'express'

export const api = express.Router()

api.get('/hello', (req: Request, res: Response, next: NextFunction) => {
	res.json({
		dsd: 1,
	})
})
