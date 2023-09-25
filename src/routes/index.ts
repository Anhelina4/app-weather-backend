import { UserRoutes } from './UserRoutes'
import express from 'express'
const router = express.Router()

export const appRouter = (): express.Router => {
  UserRoutes(router)
  return router
}

export default appRouter
