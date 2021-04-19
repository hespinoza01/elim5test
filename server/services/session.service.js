import { SessionModel } from '../models'

const SessionService = {}

/**
 * Register a website visit from user
 * @param {Number} userId
 */
SessionService.register = function (userId) {
    return new Promise(async (resolve, reject) => {
        try {
            let session = null

            // check if exists a user session register
            const prevSession = await SessionModel.findOne({
                where: { userId },
            })

            if (prevSession) {
                // extract visists counter from user
                const visitsCounter = prevSession.get('visits')

                session = await prevSession.update({
                    visists: visitsCounter + 1,
                })
            } else {
                session = await SessionModel.create({
                    userId,
                    visists: 1,
                })
            }

            resolve(session)
        } catch (error) {
            reject(error)
        }
    })
}

export default SessionService
