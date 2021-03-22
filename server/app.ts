import express from 'express'
import compression from 'compression'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { clientHost } from './env'

export const app = express()

app.use(cookieParser())
app.use(cors({
  origin: clientHost,
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(compression())
