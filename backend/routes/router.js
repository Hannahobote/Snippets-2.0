import express from 'express'
import { HomeController } from '../controllers/home-controller.js'
import { IndexController } from '../controllers/index-controller.js'

export const router = express.Router()
const controller = new HomeController()
const indexController = new IndexController()

router.get('/', (req, res) => indexController.index(req,res))

// get all snippets
// url: localhost:5000/api/snippets/
router.get('/snippets/', (req, res, next) => controller.getAll(req,res, next))

// create one
// user must be authenticated + be the author of the snippet to edit the snippet. add middleware!
// url: localhost:5000/api/snippets/
router.post('/snippets/', (req, res, next) => controller.create(req,res. next))

// read one
// url: localhost:5000/api/snippets/:id
router.get('/snippets/:id', (req, res, next) => controller.read(req,res, next))

// update one
// user must be authenticated + be the author of the snippet to update the snippet.
// url: localhost:5000/api/snippets/:id
router.put('/snippets/:id/', (req, res, next) => controller.update(req,res, next))

// delete one
// user must be authenticated + be the author of the snippet to delete the snippet.
// url: localhost:5000/api/snippets/:id
router.delete('/snippets/:id/', (req, res, next) => controller.delete(req,res, next))
