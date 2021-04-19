import { DataTypes as type, Model } from 'sequelize'
import { db } from '../config'

class TokenModel extends Model {}

TokenModel.init(
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
        token: {
            type: type.STRING(255),
            allowNull: false,
            unique: true,
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
    { sequelize: db, modelName: 'Token' }
)

export default TokenModel
