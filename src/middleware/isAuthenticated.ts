import { COOKIES } from '../constants'
import express from 'express'
import { getUserBySessionToken } from '../models/User'

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const sessionToken = req.cookies[COOKIES.WEATHER_AUTH]

    if (!sessionToken) {
      return res.sendStatus(403)
    }

    const user = await getUserBySessionToken(sessionToken)
    console.log('isAuthenticated user', user)
    if (!user) {
      return res.sendStatus(403)
    }
    req.body.identity = user
    // _.merge(req, { identity: user })
    return next()
  } catch (error) {
    console.error('User is not authenticated', error)
    res.sendStatus(400)
  }
}
