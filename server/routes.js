const UserController = require('./controllers/user.controller');
const UserMiddleWare = require('./middleware/user.middleware')
const SongController = require('./controllers/song.controller');
const SongMiddleWare = require('./middleware/song.middleware')

module.exports = (app) => {
    app.post('/register', UserMiddleWare.register, UserController.register),
        app.post('/login', UserMiddleWare.login, UserController.login),
        app.get('/songs', SongController.getAll),
        app.get('/lyrics', SongController.getLyrics),
        app.get('/songs/:id', SongController.getSong),
        app.post('/songs/add', SongMiddleWare.store, SongController.store)
    app.put('/songs/edit/:id', SongMiddleWare.update, SongController.update)


}