import { Router } from 'express'
import {
    verifyUserTokenController,
    createUserController,
} from '../controllers/user.controller'
import { AuthMiddleware } from '../../middlewares'

const router = Router()

router
    .route('/')
    .get(AuthMiddleware, verifyUserTokenController)
    .post(createUserController)

export default router
