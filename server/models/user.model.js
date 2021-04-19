import { DataTypes as type, Model } from 'sequelize'
import { db } from '../config'

class UserModel extends Model {}

UserModel.init(
    {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: type.STRING(255),
            allowNull: false,
        },
        email: {
            type: type.STRING(155),
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
    { sequelize: db, modelName: 'User' }
)

export default UserModel
