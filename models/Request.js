const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Request extends Model {}

Request.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  },
  {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    date: {
      type: DataTypes.STRING,
      allowNull: false 
    }
  },
  {
    reason: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    isApproved: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'posts',
  }
);

module.exports = Request;
