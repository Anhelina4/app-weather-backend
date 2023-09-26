import express from 'express'
import { isAuthenticated } from '../middleware'

export const WeatherRoutes = (router: express.Router) => {
  router.get('/dashboard', isAuthenticated, async (req, res) => {
    console.log('Auth was successful')
    console.log('req', req.body)
    console.log('res', res.statusCode)
    res.sendStatus(200)
  })
}

export default WeatherRoutes
