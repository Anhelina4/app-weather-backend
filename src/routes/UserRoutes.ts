import { login, register } from '../controllers/User/handlers'

import express from 'express'

export const UserRoutes = (router: express.Router) => {
  router.post('/auth/register', register)
  router.post('/auth/login', login)
}
