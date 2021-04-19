import { AccessToken } from '../utils'

/**
 * Check user credentials before request
 */
export default async function AuthMiddleware(req, res, next) {
    try {
        // extract token header
        const token = req.header('Authorization') || null

        // assign user data to req
        req.user = await AccessToken.verify(token)

        next()
    } catch (error) {
        return res.status(401).json({
            error: true,
            message: 'Invalid access token',
        })
    }
}
