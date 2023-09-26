import express from 'express'
import { getUserByEmail } from '../../../models/User'
import { hash } from '../helpers'

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body || {}

    if (!email || !password) {
      return res.sendStatus(400)
    }

    const user = await getUserByEmail(email).select(
      '+authentication.salt +authentication.password',
    )

    if (!user) {
      return res.sendStatus(400)
    }

    const userSalt = (user.authentication?.salt as string) || ''
    const expectedHash = hash(userSalt, password)

    if (expectedHash !== user?.authentication?.password) {
      return res.sendStatus(403)
    }

    // update user sessionToken
    // const salt = random()
    const hashedSessionToken = hash(userSalt, user?._id.toString())

    user.authentication.sessionToken = hashedSessionToken

    await user.save()

    res.cookie('WEATHER_AUTH', user.authentication?.sessionToken, {
      domain: 'localhost',
      path: '/',
    })

    return res.status(200).json(user).end()
  } catch (error) {
    console.error('Error during login', error)
    return res.sendStatus(400)
  }
}
