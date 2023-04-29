const express = require('express');
const bodyParse = require('body-parser');
const { Sequelize } = require('sequelize');


const app = express();
const sequelize = new Sequelize('webdevbackend', 'webdev', 'backend', {
  host: 'localhost',
  dialect: 'postgres',
  port: 8080
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    module.exports = db;
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
