import { verify, sign } from 'jsonwebtoken'
import { vars } from '../config'

// extract jwt secret key
const { JWT_SECRET } = vars

const AccessToken = {}

/**
 * Create a new access token
 * @param {Object} data
 */
AccessToken.create = function (data) {
    return new Promise((resolve, reject) => {
        try {
            sign(data, JWT_SECRET, {}, (err, token) => {
                if (err) {
                    throw err
                }

                resolve(token)
            })
        } catch (error) {
            reject(error)
        }
    })
}

/**
 * Verify a token integrity
 * @param {String} token
 */
AccessToken.verify = function (token) {
    return new Promise((resolve, reject) => {
        try {
            // if token id null or undefined raise error
            if (!token) {
                throw String('Token is required')
            }

            verify(token, JWT_SECRET, (err, decode) => {
                // check for errors
                if (err) {
                    throw err
                }

                // return verify result
                resolve(decode)
            })
        } catch (error) {
            reject(error)
        }
    })
}

export default AccessToken
