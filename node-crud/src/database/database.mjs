import mysql from "mysql2/promise";
import config from "./../config";

const connection = mysql.createConnection({
  host: config.host,
  port: config.port,
  database: config.database,
  user: config.user,
  password: config.password,
});

const getConnection = () => {
  return connection;
};

module.exports = {
  getConnection
};