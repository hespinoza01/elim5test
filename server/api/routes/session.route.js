import { Router } from 'express'
import { registerUserSessionController } from '../controllers/session.controller'
import { AuthMiddleware } from '../../middlewares'

const router = Router()

router.get('/', AuthMiddleware, registerUserSessionController)

export default router
