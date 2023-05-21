const connect = require('./controll/connectdb');
// const Employees = require('./models/employees.js');
// const Task = require('./models/task');
// const Employee=require('./models/task');
const seedDB=require('./seeders/seedDB');

//checking connect
const start =async()=>{
  try {
    await connect.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
} 


// // to clear the table
// (async () => {
//   await connect.sync({ force: true });
//   console.log('TEST');
// })();

// User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
// User.sync({ force: true }) - This creates the table, dropping it first if it already existed
// User.sync({ alter: true }) - This checks what is the current state of the table in the database 
// (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.

const modelSync = async () =>{
// to clear the table
try {

await connect.sync({force:true});
console.log('CREATES OR IGNORE');

await seedDB();
console.log('TRY SEED INTO MODEL')

} catch (err){
  console.error('ERRER CAUSE', err)
}
}


// const bp = require('body-parser');
const express = require('express'); 
const app = express(); 
const cors=require('cors'); 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))


const apiRouter = require('./routes/index');
app.use('/api',apiRouter);

start();
modelSync();

const PORT = 4000;
app.listen(PORT, () => {
  
  console.log(`Server listening on port ${PORT}`);

});


