const {
  sequelize,
  User,
  Song
} = require("../models");

const Promise = require("bluebird");
const songs = require("./songs.json");
const users = require("./users.json");

// sequelize.sync({ force: true }).then(async function () {
//   await Promise.all(
//     songs.map((song) => {
//       Song.create(song);
//     })
//   );
//   await Promise.all(
//     users.map((user) => {
//       User.create(user);
//     })
//   );
// });

sequelize.sync({
  force: true
}).then(async function () {

  await songs.map((song) => {
    Song.create(song);
  })

  await users.map((user) => {
    User.create(user);
  })

});