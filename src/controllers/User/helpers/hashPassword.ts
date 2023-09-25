import crypto from 'crypto'
const SECRET = 'APP_WEATHER_SECRET_AUTH_KEY'

export const hashPassword = (salt: string, password: string): string => {
  return crypto
    .createHmac('sha256', [salt, password].join('/'))
    .update(SECRET)
    .digest('hex')
}
