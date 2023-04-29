const Sequelize = require('sequelize');
const db = require('../db');

const Task = db.define("task", {

  assigneduser: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
    allowNull: false
  },

  priority: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }

});

module.exports = Task;