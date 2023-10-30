var mysql = require('mysql');
let con = null;
module.exports = class {
    constructor() {
        con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "tabtracker"
        });
    }

    connect() {
        con.connect((err) => {
            if (err) {
                throw err;
            }
            console.log("Connected!");

        });
    }

    register(data) {
        this.connect();
        var sql = `INSERT INTO user (email, password) VALUES ('${data.email}', '${data.password}')`;
        con.query(sql, function (err, result) {
            if (err) {
                throw err
            };
            console.log("In Connector register", result)
            return result;
        });
    }

    login(data) {
        this.connect();
        var sql = `SELECT * FROM user WHERE email='${data.email}' & password='${data.password}' LIMIT 1`;
        con.query(sql, function (err, result) {
            console.log(result)
            if (err) throw err;
            return result;
        });
    }
}