import express from 'express'
import { register } from 'controllers/User/handlers'

export default (router: express.Router) => {
  router.post('/auth/register', register)
}
