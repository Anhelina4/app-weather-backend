import { UserRoutes } from './UserRoutes'
import { WeatherRoutes } from './WeatherRoutes'
import express from 'express'
const router = express.Router()

export const appRouter = (): express.Router => {
  UserRoutes(router)
  WeatherRoutes(router)
  return router
}

export default appRouter
