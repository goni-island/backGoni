const {DataTypes,Sequelize, Model} = require('sequelize');
// const connect = require('../controll/connectdb');
const Employee = require('./employees');
const Task = require('./task');

Task.belongsTo(Employee,{as: "employee"});
Employee.hasMany(Task,{as: "task"});

module.exports ={
  Employee,
  Task
};
