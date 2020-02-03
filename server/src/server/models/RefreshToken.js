'use strict';

module.exports = (sequelize, DataTypes) => {
	const RefreshToken = sequelize.define('RefreshToken', {
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
		tokenString: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});

	return RefreshToken;
};
