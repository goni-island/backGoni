const {DataTypes,Sequelize, Model} = require('sequelize');
const connect = require('../controll/connectdb');


const Task = connect.define("task", {

  task: {
    type: DataTypes.STRING,
    allowNull: false
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false
  },

  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }

});
console.log('------task CHECKING---------')
console.log(Task === connect.models.task);

// const {DataTypes,Sequelize, Model} = require('sequelize');
// // const connect = require('../controll/connectdb');
// const Employee = require('./employees');

// Task.belongsTo(Employee);
// Employee.hasMany(Task);

// module.exports ={
//   Employee,
//   Task
// };

module.exports = Task;