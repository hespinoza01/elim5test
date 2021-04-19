import { TokenModel } from '../models'
import { AccessToken } from '../utils'

const TokenService = {}

/**
 * Create a token register by token hash
 * @param {String} token
 * @param {Boolean} raw
 */
TokenService.get = function (token, raw = true) {
    return new Promise(async (resolve, reject) => {
        try {
            const _token = await TokenModel.findOne({
                where: {
                    token,
                },
                raw,
            })

            resolve(_token)
        } catch (error) {
            reject(error)
        }
    })
}

/**
 * Create a token register from token hash
 * @param {Number} userId
 * @param {Boolean} raw
 */
TokenService.getByUserId = function (userId, raw = true) {
    return new Promise(async (resolve, reject) => {
        try {
            const _token = await TokenModel.findOne({
                where: {
                    userId,
                },
                raw,
            })

            resolve(_token)
        } catch (error) {
            reject(error)
        }
    })
}

/**
 * Create a new access token for user
 * @param {Number} userId
 */
TokenService.create = function (userId) {
    return new Promise(async (resolve, reject) => {
        try {
            // create a new token hash
            const tokenHash = await AccessToken.create({ userId })

            // var to capture a token info after create/update
            let token = null

            // check if exist a current token
            const prevToken = await TokenService.getByUserId(userId)

            // if exist a prev token, update token hash
            if (prevToken) {
                token = await prevToken.update({
                    token: tokenHash,
                })
            } else {
                token = await TokenModel.create({
                    userId,
                    token: tokenHash,
                })
            }

            resolve(token)
        } catch (error) {
            reject(error)
        }
    })
}

export default TokenService
