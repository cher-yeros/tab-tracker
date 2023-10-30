const mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tabtracker"
})

con.connect((err) => {
    if (err) {
        console.log("Not Connected!");
        // throw err;
    }
    console.log("Connected!");
});

module.exports = con;