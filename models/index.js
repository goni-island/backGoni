const {DataTypes,Sequelize, Model} = require('sequelize');
// const connect = require('../controll/connectdb');
const Employee = require('./employees');
const Task = require('./task');

Task.belongsTo(Employee);
Employee.hasMany(Task);

module.exports ={
  Employee,
  Task
};
