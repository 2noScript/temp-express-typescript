import express from 'express'
import { apiV1Controller as apiV1 } from '../controllers'
export const api = express.Router()

api.get('/home', apiV1.getHome)
api.get('/top100', apiV1.getTop100)
api.get('/new-release-chart', apiV1.getNewReleaseChart)
api.get('/chart-home', apiV1.getChartHome)

api.get('/artist/:name', apiV1.getArtist)

// param {id, page, count}
api.get('/list-artist-song/:id', apiV1.getListArtistSong)

api.get('/search', apiV1.search)

api.get('/detail-playlist/:id', apiV1.getDetailPlaylist)
api.get('/info-song/:id', apiV1.getInfoSong)
api.get('/song/:id', apiV1.getSong)
api.get('/lyric/:id', apiV1.getLyric)

api.get('/list-mv/id', apiV1.getListMV)
api.get('/category-mv/id', apiV1.getCategoryMV)
api.get('/mv/:id', apiV1.getMV)
