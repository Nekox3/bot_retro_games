const mysql = require('mysql2');
 
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password:"",
  database: 'roms_juegos',
  charset:"utf8mb4"
});

module.exports = pool.promise();