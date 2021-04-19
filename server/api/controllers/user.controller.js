import { UserService, TokenService } from '../../services'
import { UserValidator } from '../../validators'

async function createUserController(req, res) {
    try {
        // verify user data
        const { email, name } = await UserValidator(req.body)

        // register user
        UserService.create(name, email)
            // create a access token
            .then(user => TokenService.create(user.id))
            .then(token => res.send(token))
            .catch(error => {
                console.log(`createUserController: ${error}`)
                res.send({})
            })
    } catch (error) {
        console.log(`createUserController: ${error}`)
        res.send({ error: true, message: error })
    }
}

function verifyUserTokenController(req, res) {
    try {
        // extract token header
        const token = req.header('Authorization')

        TokenService.get(token)
            .then(response => {
                // if response is null, raise unauthorizated error
                if (!response) {
                    res.status(401).send({
                        error: true,
                        message: 'token not exist',
                    })
                    return
                }

                res.send({ success: true })
            })
            .catch(error =>
                res.status(401).send({ error: true, message: error })
            )
    } catch (error) {
        console.log(`verifyUserTokenController: ${error}`)
        res.status(401).send({ error: true, message: error })
    }
}

export { createUserController, verifyUserTokenController }
