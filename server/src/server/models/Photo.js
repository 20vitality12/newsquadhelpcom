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
			defaultValue: '1574978045213_anonumous-min.png',
			allowNull: false
		}
	});
	Photo.associate = function (models) {
		Photo.belongsTo(models.User, {foreignKey: 'userId', sourceKey: 'id'});
	};
	return Photo;
};
