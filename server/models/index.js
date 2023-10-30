const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config');
const Song = require('./Song');
const User = require('./User');
// const sequelize = new Sequelize(
//     config.db.dbname,
//     config.db.username,
//     config.db.password,
//     config.db.options
// );

const sequelize = new Sequelize(
    'tabtracker',
    'root',
    '', {
        host: 'localhost',
        dialect: 'mysql',

        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    });

db = {}

// fs.readdirSync(__dirname)
//     .filter((file) =>
//         file !== 'index.js'
//     )
//     .forEach((file) => {
//         // const model = sequelize.require(path.join(__dirname, file))

//         // db[model.name] = model;
//         db[model.name] = require('./');

//         console.log(file);
//     });

db.Song = require('./Song')(sequelize, Sequelize);
db.User = require('./User')(sequelize, Sequelize);

db.Song.belongsTo(db.User)
db.User.hasMany(db.Song)

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db;