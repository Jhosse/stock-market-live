import dotenv from 'dotenv'
import { PUBLICKEY, PRIVATEKEY } from './certificates'

dotenv.config()

export const yahooFinanceToken = process.env.YAHOO_FINANCE_TOKEN || ''

export const isDev = process.env.ENV === 'dev'
export const port = process.env.PORT || 4000
export const host = process.env.HOST || 'http://localhost'
export const clientHost = process.env.CLIENT_HOST || 'http://localhost:3000'

export const publicKey = PUBLICKEY
export const privateKey = PRIVATEKEY

export const saltRounds = process.env.SALT_ROUNDS || 5
