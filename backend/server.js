import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import logger from 'morgan'
import connectDB from './config/mongoose.js'
import { router } from './routes/router.js'

//dotenv.config()
const port = 5000 || process.env.PORT 
// connect to database
//await connectDB()
// Creates an Express application.
const app = express()

// base url
const baseURL = process.env.BASE_URL || '/'

// Set various HTTP headers to make the application little more secure (https://www.npmjs.com/package/helmet).
// (The web application uses external scripts and therefore needs to explicitly trust on code.jquery.com and cdn.jsdelivr.net.)
app.use(helmet())
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      'script-src': ["'self'", 'code.jquery.com', 'cdn.jsdelivr.net']
    }
  })
)

// Set up a morgan logger using the dev format for log entries.
app.use(logger('dev'))


// Parse requests of the content type application/x-www-form-urlencoded.
// Populates the request object with a body object (req.body).
app.use(express.urlencoded({ extended: false }))

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sessionOptions.cookie.secure = true // serve secure cookies
}

// Middleware to be executed before the routes.
/*app.use((req, res, next) => {
  // Flash messages - survives only a round trip.
  if (req.session.flash) {
    res.locals.flash = req.session.flash
    delete req.session.flash
  }
  // pass base url to the views
  res.locals.baseURL = baseURL
  next()
})*/

// Register routes.
app.use('/api', router)

// Starts the HTTP server listening for connections.
app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`)
  console.log('Press Ctrl-C to terminate...')
})

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sessionOptions.cookie.secure = true // serve secure cookies
}