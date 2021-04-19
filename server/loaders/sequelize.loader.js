// import models for sync
import { UserModel, TokenModel, SessionModel } from '../models'

/**
 * sync sequelize models with database
 * @param {Sequelize} sequelizeInstance
 */
export default async function SequelizeLoader(sequelizeInstance) {
    if (!sequelizeInstance || !sequelizeInstance.sync) {
        return
    }

    // Configuring model relationships
    TokenModel.belongsTo(UserModel, { foreignKey: 'userId' })
    SessionModel.belongsTo(UserModel, { foreignKey: 'userId' })

    UserModel.hasOne(UserModel, { foreignKey: 'userId' })
    UserModel.hasOne(UserModel, { foreignKey: 'userId' })

    // models sync
    await sequelizeInstance.sync({ alter: false })

    return sequelizeInstance
}
