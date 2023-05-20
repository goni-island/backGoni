const {Sequelize}= require('sequelize');

const database ='goniback';
const dbtype = 'postgres';
const pwd = '123';

// Option 3: Passing parameters separately (other dialects)
const connect = new Sequelize(database, dbtype, pwd, {
  host: 'localhost',
  dialect:'postgres' /* one of 'mysql' |  | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */  
});

module.exports = connect;
// instance of Sequelize