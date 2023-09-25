import UserRoutes from './UserRoutes'
import express from 'express'
const router = express.Router()

const appRouter = (): express.Router => {
  UserRoutes(router)
  return router
}
export { appRouter }
