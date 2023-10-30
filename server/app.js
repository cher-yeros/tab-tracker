const express = require('express');
const cors = require('cors');
const db = require('./models');
const config = require('./config/config')

const app = express();
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors())

require('./routes')(app);

db.sequelize.sync().then(() => {
    app.listen(config.port);
});