import dotenv from 'dotenv'

dotenv.config()

export const yahooFinanceToken = process.env.YAHOO_FINANCE_TOKEN || ''
export const isDev = process.env.ENV === 'dev'
