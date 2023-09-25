import { createUser, getUserByEmail } from 'models/User'
import { hashPassword, random } from 'controllers/User/helpers'

import express from 'express'

const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, name, surname, password, avatar } = req.body

    if (!email || !name || !surname || !password) {
      res.sendStatus(400)
    }

    const isUserExists = await getUserByEmail(email)

    if (isUserExists) {
      res.sendStatus(400)
    }

    const salt = random()
    const hashedPassword = hashPassword(salt, password)
    const user = await createUser({
      email,
      name,
      surname,
      avatar,
      authentication: { salt, password: hashedPassword },
    })

    return res.status(200).json(user).end()
  } catch (error) {
    console.error('Error during register', error)
    res.sendStatus(400)
  }
}

export default register
