import express from 'express'
import { AuthController } from '../controllers/auth-controller.js'

export const router = express.Router()
const authController = new AuthController()

router.get('/', (req, res, next) => authController.index(req, res, next))