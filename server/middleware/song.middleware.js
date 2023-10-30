const Joi = require('joi');

const schema = Joi.object({
    title: Joi.string(),
    artist: Joi.string(),
    album: Joi.string(),
    genre: Joi.string()
})

module.exports = {
    store(req, res, next) {
        const {
            error
        } = schema.validate(req.body);

        if (error) {
            res.status(400).send({
                error: error.details[0].message
            })
        } else {
            next()
        }
    },
    update(req, res, next) {
        const {
            error
        } = schema.validate(req.body);

        if (error) {
            res.status(400).send({
                error: error.details[0].message
            })
        } else {
            next()
        }
    }
}