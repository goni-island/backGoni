const {DataTypes,Sequelize, Model} = require('sequelize');
const connect = require('../controll/connectdb');


const Task = connect.define("task", {

  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prioritylevel: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  
  completion: {
    type: DataTypes.STRING,
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