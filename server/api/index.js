import { Router } from 'express'
import { UserRoute, SessionRoute } from './routes'

const api = Router()

api.use('/user', UserRoute)
api.use('/session', SessionRoute)

export default api
