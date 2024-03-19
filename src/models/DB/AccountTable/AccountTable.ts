import { Sequelize, sequelize, DataTypes, Model, authenticateDB } from '../DataBase';

class AccountTable extends Model {};

AccountTable.init ({
    
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    behance: {
        type: DataTypes.STRING,
        allowNull: false
    }


}, {
    sequelize, // database
    modelName: 'account_authenticates'
});


export { AccountTable }