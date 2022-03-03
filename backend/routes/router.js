import express from 'express'
import { HomeController } from '../controllers/homeController.js'
import { IndexController } from '../controllers/IndexController.js'

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


/*router.get('/', (req, res, next) => controller.index(req, res, next))

router.get('/new', (req, res, next) => controller.new(req, res, next))
// user has to be logged in to create
router.post('/create', auth.authorize, controller.create)

router.get('/:id/edit', (req, res, next) => controller.edit(req, res, next))
// user must be authenticated + be the author of the snippet to edit the snippet.
router.post('/:id/update', auth.authorize, auth.userPremission, controller.update)

router.get('/:id/remove', (req, res, next) => controller.remove(req, res, next))
// user must be authenticated + be the author of the snippet to delete the snippet.
router.post('/:id/delete', auth.authorize, auth.userPremission, controller.delete)*/
