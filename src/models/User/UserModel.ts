import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String, required: false },
  authentication: {
    password: { type: String, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
})

export const UserModel = mongoose.model('User', UserSchema)
