import { Model, DataTypes } from 'sequelize';
import {database} from '../sequelize/config/database.config';

export class userModel extends Model{}

userModel.init({
  // Model attributes are defined here
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
  },
  nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
  },
  email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
  },
  telefono: {
      type: DataTypes.STRING(50),
      allowNull: false
  },
}, {
  // Other model options go here
  sequelize: database, // Pass the Sequelize instance here
  modelName: 'angular', // Choose the model name
  tableName: 'angular',
  timestamps: false
});
