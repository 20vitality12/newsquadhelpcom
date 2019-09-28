import { CREATIVE, BUYER, ADMIN } from '../constants/constants';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        notEmpty: true,
      },
    },
    role: {
      type: DataTypes.ENUM,
      values: [CREATIVE, BUYER, ADMIN],
      defaultValue: BUYER,
    },
    isBanned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  User.associate = function (models) {
    User.hasMany(models.Photo, { foreignKey: 'userId', targetKey: 'id' });
  };
  User.associate = function (models) {
    User.hasMany(models.RefreshToken, { foreignKey: 'userId', targetKey: 'id' });
  };
  return User;
};
