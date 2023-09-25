import { appRouter } from './routes'
import bodyParser from 'body-parser'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
// import http from 'http'
import mongoose from 'mongoose'
const app = express()

app.use(cors({ credentials: true }))
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

// const server = http.createServer(app)

app.listen(8080, () =>
  console.log('Server is running on http://localhost:8080/'),
)

const MONGO_URL =
  'mongodb+srv://anhelina:anhelina@atlascluster.i1l107b.mongodb.net/?retryWrites=true&w=majority'

mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) =>
  console.log('MongoDB connection error', error),
)

app.use('/', appRouter())
