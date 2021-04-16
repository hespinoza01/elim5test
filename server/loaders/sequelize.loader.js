// import models for sync
import {} from '../models'

/**
 * sync sequelize models with database
 * @param {Sequelize} sequelizeInstance
 */
export default async function SequelizeLoader(sequelizeInstance) {
    if (!sequelizeInstance || !sequelizeInstance.sync) {
        return
    }

    // Configuring model relationships

    // models sync
    await sequelizeInstance.sync({ alter: false })

    return sequelizeInstance
}
