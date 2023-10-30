module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define("song", {
    title: {
      type: DataTypes.STRING,
    },
    album: {
      type: DataTypes.STRING,
    },
    artist: {
      type: DataTypes.STRING,
    },
    genre: {
      type: DataTypes.STRING,
    },
  });

  return Song;
};
