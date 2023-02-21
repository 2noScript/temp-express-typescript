import { query, Request, Response } from 'express'
import { ZingMp3 } from '../utils'

class ApiV1 {
	getDetailPlaylist = async (req: Request, res: Response) => {
		const data = await ZingMp3.getDetailPlaylist(req.params.id)
		res.send(data)
	}

	getSong = async (req: Request, res: Response) => {
		const data = await ZingMp3.getSong(req.params.id)
		res.send(data)
	}
	getInfoSong = async (req: Request, res: Response) => {
		const data = await ZingMp3.getInfoSong(req.params.id)
		res.send(data)
	}

	getLyric = async (req: Request, res: Response) => {
		const data = await ZingMp3.getLyric(req.params.id)
		res.send(data)
	}

	getArtist = async (req: Request, res: Response) => {
		const data = await ZingMp3.getArtist(req.params.name)
		res.send(data)
	}

	getListArtistSong = async (req: Request, res: Response) => {
		const { page, count } = req.query
		const data = await ZingMp3.getListArtistSong(
			req.params.id,
			page + '',
			count + ''
		)
		res.send(data)
	}

	search = async (req: Request, res: Response) => {
		const { key } = req.query
		const data = await ZingMp3.search(key + '')
		res.send(data)
	}
	getChartHome = async (req: Request, res: Response) => {
		const data = await ZingMp3.getChartHome()
		res.send(data)
	}

	getNewReleaseChart = async (req: Request, res: Response) => {
		const data = await ZingMp3.getNewReleaseChart()
		res.send(data)
	}
	getHome = async (req: Request, res: Response) => {
		const data = await ZingMp3.getHome()
		res.send(data)
	}

	getTop100 = async (req: Request, res: Response) => {
		const data = await ZingMp3.getTop100()
		res.send(data)
	}

	getListMV = async (req: Request, res: Response) => {
		const { page, count } = req.query
		const data = await ZingMp3.getListMV(req.params.id, page + '', query + '')

		res.send(data)
	}
	getCategoryMV = async (req: Request, res: Response) => {
		const data = await ZingMp3.getCategoryMV(req.params.id)
		res.send(data)
	}
	getMV = async (req: Request, res: Response) => {
		const data = await ZingMp3.getVideo(req.params.id)
		res.send(data)
	}
}

export const apiV1Controller = new ApiV1()
