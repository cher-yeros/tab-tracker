const Joi = require('joi');

const schema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
})

module.exports = {
    register(req, res, next) {
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
    login(req, res, next) {
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