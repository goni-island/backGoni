const {DataTypes,Sequelize, Model} = require('sequelize');
const connect = require('../controll/connectdb');
// const sequelize = new Sequelize('sqlite::memory:');
const Employee = connect.define('employee',{
  firstname:{
    type:DataTypes.STRING,
    allowNull:false},
  
  lastname: {
    type:DataTypes.STRING,
    allowNull: false
  },
  department:{
    type:DataTypes.STRING,                          },
}
);
console.log('------EMP CHECKING---------')
console.log(Employee === connect.models.employee); //why not working

module.exports = Employee;
