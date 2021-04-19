import { UserModel } from '../models'

const UserService = {}

/**
 * Register a new user into DB
 * @param {String} name
 * @param {String} email
 */
UserService.create = function (name, email) {
    return new Promise(async (resolve, reject) => {
        try {
            let user = null

            // check if user exist
            const prevUser = await UserService.get(email, false)

            if (prevUser) {
                user = await prevUser.update({
                    email,
                    name,
                })
            } else {
                user = await UserModel.create({
                    name,
                    email,
                })
            }

            resolve(user.get({ plain: true }))
        } catch (error) {
            reject(error)
        }
    })
}

/**
 * Find user register by id or email
 * @param {String|Number} userKeyword
 * @param {Boolean} raw - if raw id false, return a sequelize instance as user
 */
UserService.get = function (userKeyword, raw = true) {
    return new Promise(async (resolve, reject) => {
        try {
            /**
             * If keyword is a string, finf user by email. Else, find
             * user by id
             */
            const where =
                typeof userKeyword === 'string'
                    ? { email: userKeyword }
                    : { id: userKeyword }

            // get user from db
            const user = await UserModel.findOne({
                where,
                raw,
            })

            resolve(user)
        } catch (error) {
            reject(error)
        }
    })
}

/**
 * Update a existing user register
 * @param {String} name
 * @param {String} email
 */
UserService.update = function (name, email) {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await UserService.get(email, false)

            if (!user) {
                throw String('user not exist')
            }

            const userUpdated = await user.update({ name, email })

            resolve(userUpdated.get({ plain: true }))
        } catch (error) {
            reject(error)
        }
    })
}

export default UserService
