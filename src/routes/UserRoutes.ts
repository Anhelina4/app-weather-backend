import express from 'express'
import { register } from 'controllers/User/handlers'

export const UserRoutes = (router: express.Router) => {
  router.post('/auth/register', register)
}
