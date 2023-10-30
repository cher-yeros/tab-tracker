const {
    User,
    Song
} = require('../models')

module.exports = {
    register(req, res) {
        User.create(req.body).then(result => {
            res.send({
                success: true,
                user: result
            })
        }).catch(err => {
            res.status(400).send(
                err
            )
        })
    },
    login(req, res) {
        User.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            },
            include: [Song]
        }).then(result => {
            if (result) {
                res.send({
                    success: true,
                    user: result
                })
            } else {
                res.send({
                    success: false,
                    user: result
                })
            }

            console.log(result)
        }).catch(err => {
            res.status(400).send(
                err
            )
        })
    }
}