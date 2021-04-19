import Joi from '@hapi/joi'
import { ValidationErrorMessage } from '../utils'

export default function UserValidator(body) {
    return new Promise((resolve, reject) => {
        console.log(body)
        const schema = Joi.object({
            name: Joi.string()
                .exist()
                .error(() => new Error('Enter a valid name')),

            email: Joi.string()
                .trim()
                .max(150)
                .email()
                .exist()
                .error(() => new Error('Enter a valid email')),
        })

        const { error, value } = schema.validate(body)

        if (error) {
            reject(ValidationErrorMessage(error))
        }

        resolve(value)
    })
}
