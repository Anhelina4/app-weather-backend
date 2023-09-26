import { createUser, getUserByEmail } from '../../../models/User'
import { hash, random } from '../../../controllers/User/helpers'

import express from 'express'

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, name, surname, password, avatar } = req.body || {}

    if (!email || !name || !surname || !password) {
      return res.sendStatus(400)
    }

    const isUserExists = await getUserByEmail(email)

    if (isUserExists) {
      return res.sendStatus(400)
    }

    const salt = random()
    const hashedPassword = hash(salt, password)
    const user = await createUser({
      email,
      name,
      surname,
      avatar: avatar || null,
      authentication: { salt, password: hashedPassword },
    })

    return res.status(200).json(user).end()
  } catch (error) {
    console.error('Error during register', error)
    res.sendStatus(400)
  }
}
export default register
