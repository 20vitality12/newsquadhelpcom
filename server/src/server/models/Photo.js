'use strict';

module.exports = (sequelize, DataTypes) => {
	const Photo = sequelize.define('Photo', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				key: 'id',
				model: 'Users'
			}
		},
		filename: {
			type: DataTypes.STRING,
			defaultValue: '2019-11-28T21:44:57.890Zanonumous-min.png',
			allowNull: false
		}
	});
	Photo.associate = function (models) {
		Photo.belongsTo(models.User, {foreignKey: 'userId', sourceKey: 'id'});
	};
	return Photo;
};
