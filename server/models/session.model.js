import { DataTypes as type, Model } from 'sequelize'
import { db } from '../config'

class SessionModel extends Model {}

SessionModel.init(
    {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: type.INTEGER,
            allowNull: false,
        },
        visits: {
            type: type.INTEGER,
            allowNull: false,
        },
        createdAt: {
            type: type.DATE,
            defaultValue: type.NOW,
        },
        updatedAt: {
            type: type.DATE,
            defaultValue: type.NOW,
        },
    },
    { sequelize: db, modelName: 'Session' }
)

export default SessionModel
