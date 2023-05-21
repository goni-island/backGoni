const express =require('express');
const router = express.Router();

//Routes
const employeeRoutes = require('./employees.js');
const taskRoutes = require('./tasks.js');

router.use('/tasks', taskRoutes);
router.use('/employees',employeeRoutes); // if employees, then handle by route

module.exports=router;