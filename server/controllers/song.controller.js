const {
    Song,
    User
} = require('../models')

const fs = require('fs');
const path = require('path');
const lyrics = []

module.exports = {
    store(req, res) {
        Song.create(req.body).then(result => {
            res.send(
                result
            )
        }).catch(err => console.log("Error", err))
    },
    getAll(req, res) {
        const q = req.query.q;
        if (!q) {
            Song.findAll({
                include: [User]
            }).then(song => {
                res.send(
                    song
                )
            }).catch(err => console.log("error", err));
        } else {
            Song.findAll({
                where: {
                    // $or: [
                    //     'artist', 'album', 'title', 'genre'
                    // ].map(key => ({
                    //     [key]: {
                    //         $like : `%${q}%`,
                    //     }
                    // }))

                    title: {
                        $like: `%${q}%`
                    }
                    // $or: [
                    //     title, artist, album, genre, {
                    //         $like: `%${q}%`
                    //     },
                    // ]
                }
            }).then(song => {
                res.send(
                    song
                )
            }).catch(err => console.log("error", err));
        }

    },
    getSong(req, res) {
        Song.findOne({
            where: {
                id: req.params.id
            }
        }).then(song => {
            res.send(song)
        }).catch(err => console.log("error", err));
    },
    update(req, res) {
        console.log(req.params);
        Song.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.send(
                result
            )
        }).catch(err => console.log("Error", err))
    },
    getLyrics(req, res) {
        const p = "C:\\Users\\Chery\\Documents\\lyric\\lyrics"
        const f = fs.readdirSync(p)

        let l = 0

        f.map(file => {
            fs.readFile(path.join(p, file), 'utf8', (err, data) => {
                if (err) {
                    res.status(302).send(err)
                }
                data = data.replace(/\n/g, '<br/>')

                lyrics[l] = {
                    id: l++,
                    artist: 'unknown',
                    title: file.replace('.txt', ''),
                    lyric: data
                }

            })
        })
        res.send({
            lyrics
        })
    }
}