const mysql = require('mysql');
const conection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234567",
    port: 3300,
    database: "db_dev_project",
})

conection.connect(function (err) {
    if (err) {
        console.log("DB No Connected!")
        throw err;
    } else {
        console.log("DB Connected!")
    }
});

module.exports = conection;