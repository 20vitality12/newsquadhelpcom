"use strict";

const UserModel = require('./User');
const PhotoModel = require('./Photo');
const RefreshTokenModel = require('./RefreshToken');
const UserDataModel = require('./UserData');
const ContestModel = require('./Contest');
const EntryModel = require('./Entry');
const StatusModel = require('./Status');


const fs = require('fs'),
  path = require('path'),
  Sequelize = require('sequelize'),
  basename = path.basename(__filename),
  env = process.env.NODE_ENV || 'development',
  configPath = env === 'production' ? path.join(__dirname, '..', '..', '..', 'src/server/config/config.json') : path.join(__dirname, '..', 'config/config.json'),
  config = require(configPath)[ env ],
  db = {}

const sequelize = new Sequelize(config.database, config.username, config.password, config)

const User = UserModel(sequelize, Sequelize);
const Photo = PhotoModel(sequelize, Sequelize);
const RefreshToken = RefreshTokenModel(sequelize, Sequelize);
const UserData = UserDataModel(sequelize, Sequelize);
const Contest = ContestModel(sequelize, Sequelize);
const Entry = EntryModel(sequelize, Sequelize);
const Status = StatusModel(sequelize, Sequelize);

User.hasMany(Photo, {foreignKey: 'userId', as: 'photo'});
User.hasMany(RefreshToken, {foreignKey: 'userId'});
User.hasMany(Contest, {foreignKey: 'userId', as: 'contests'});
User.hasMany(Entry, {foreignKey: 'userId', as:  'entries'});
User.hasOne(UserData, {foreignKey: 'userId', as: 'userData'});

Contest.hasMany(Entry, {foreignKey: 'contestId', as: 'entries'});
Contest.belongsTo(User, {foreignKey: 'userId',});

Entry.belongsTo(User, {foreignKey: 'userId',});
Entry.belongsTo(Contest, {foreignKey: 'contestId', as: 'entries'});
Entry.hasOne(Status, {foreignKey: 'id', as: 'status'});

Status.belongsTo(Entry, {foreignKey: 'id'});

UserData.belongsTo(User, {foreignKey: 'userId',});

Photo.belongsTo(User, {foreignKey: 'userId',});

// fs
//   .readdirSync(__dirname)
//   .filter((file) => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
//   })
//   .forEach((file) => {
//     const model = sequelize.import(path.join(__dirname, file))
//
//     db[ model.name ] = model
//   })
//
// Object.keys(db).forEach((modelName) => {
//   if (db[ modelName ].associate) {
//     db[ modelName ].associate(db)
//   }
// })

db.User = User;
db.Photo = Photo;
db.RefreshToken = RefreshToken;
db.UserData = UserData;
db.Contest = Contest;
db.Entry = Entry;
db.Status = Status;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
