import crypto from 'crypto'
const SECRET = 'APP_WEATHER_SECRET_AUTH_KEY'

const hashPassword = (salt: string, password: string): string => {
  return crypto
    .createHmac('sha256', [salt, password].join('/'))
    .update(SECRET)
    .digest('hex')
}

export default hashPassword
