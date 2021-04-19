import { SessionService } from '../../services'

function registerUserSessionController(req, res) {
    try {
        const { userId } = req.user

        SessionService.register(userId)
            .then(response => res.send(response))
            .catch(error => {
                console.log(`registerUserSessionController: ${error}`)
                res.send({ error: true, message: error })
            })
    } catch (error) {
        console.log(`registerUserSessionController: ${error}`)
        res.send({ error: true, message: error })
    }
}

export { registerUserSessionController }
