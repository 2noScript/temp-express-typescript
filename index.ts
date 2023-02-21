import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { api } from './routes'
import { PORT } from './env'
import { ZingMp3 } from './utils'

const app: Express = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req: Request, res: Response) => {
	res.send('server on')
})

app.use('/api', [api])

app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})
