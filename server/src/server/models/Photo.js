'use strict';

module.exports = (sequelize, DataTypes) => {
	const Photo = sequelize.define('Photo', {
		filename: {
			type: DataTypes.STRING,
			defaultValue: 'anonumous.png',
			allowNull: false
		}
	});

	return Photo;
};
