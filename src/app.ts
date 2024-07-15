import express, { Application } from 'express'
import cors from 'cors'
import notFound from './app/middleware/notFoundRoute'
import { routes } from './app/routes'
import globalErrorHandler from './app/middleware/globalErrorHandler'

const app: Application = express()

// middleware
app.use(cors({ origin: ['https://fitness-equipment-and-accessories-client-chi.vercel.app'] }))
app.use(express.json())

// application routes
app.use('/api/v1', routes)

app.get('/', (req, res) => {
  res.send('Server is running')
})

// customize error
app.use(globalErrorHandler)
app.use(notFound)

export default app