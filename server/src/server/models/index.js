"use strict";

const fs = require('fs'),
  path = require('path'),
  Sequelize = require('sequelize'),
  basename = path.basename(__filename),
  env = process.env.NODE_ENV || 'development',
  configPath = env === 'production' ? path.join(__dirname, '..', '..', '..', 'src/server/config/config.json') : path.join(__dirname, '..', 'config/config.json'),
  config = require(configPath)[ env ],
  db = {}

const sequelize = new Sequelize(config.database, config.username, config.password, config)

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))

    db[ model.name ] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[ modelName ].associate) {
    db[ modelName ].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
