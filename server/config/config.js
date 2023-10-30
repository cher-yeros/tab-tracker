module.exports = {
    port: process.env.PORT || 5000,
    db: {
        dbname: process.env.DB_NAME || 'tabtracker',
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        port: process.env.DB_PORT || '',
        options: {
            host: process.env.HOST || 'localhost',
            dialect: process.env.DIALECT || 'sqlite',
            storage: './tabtracker.sqlite'
        }
    }
}