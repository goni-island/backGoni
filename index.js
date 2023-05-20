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
await connect.sync();
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

// const goni = await User.create({firstname:'Goni',lastname:'Choi'});
// console.log (goni.toJSON()); // true
// console.log(goni.firstname);
// // either example
// app.use(log);
// -> if route가 겁나많을때? 

// has to pass to the next -> edit or delete 때 써보기
// function log(req,res,next){
//   console.log('A')
//   console.log('B')
//   console.log('C')
//   next()
// }
// middleware checking
// app.get('/', log,(req,res)=> { res.send('+++HELLO WORLD++')});

app.get('/', (req,res)=> res.send('+++HELLO WORLD++'));


//Routes
const employeeRoutes = require('./routes/employees');
const taskRoutes = require('./routes/tasks');


app.use('/tasks', taskRoutes);
app.use('/employees',employeeRoutes); // if employees, then handle by route
// // local host 4000
// app.get('/', (req,res)=> res.send('+++HELLO WORLD++'));
 

start();
modelSync();

const PORT = 4000;
app.listen(PORT, () => {
  
  console.log(`Server listening on port ${PORT}`);

});


// let id=1;
// const employeeList =[
//   {
//     id: 1,
//     firstname:'Goni',
//     lastname: 'Choi',
//     department: 'CS',
//   },];

// const PORT = 8000;
// //client to server : req
// //server to client : res

// app.post ('/employee', (req, res) => {
//   const { firstname, lastname, department } = req.body;
//   console.log('req.body: ', req.body);
//   employeeList.push({
//   id: ++id,
//   firstname,
//   lastname,
//   department,
// });
// return res.send("Success");
// })

// // to delete employee 
// app.delete('/employee', (req, res) => {
// console.log('id: ', req.id);
// const toDelete = req.params.toDelete;
// const index = employeeList.indexOf(toDelete);
// console.log(index);
// employeeList.splice(index,1);
// return res.send("Success");

// })


// // // to delete task
// // app.delete('/ss', (req, res) => {
// //   console.log('rep.body: ', req.body);
// //   const toDelete = req.params.toDelete;
// //   const index = employeeList.indexOf(toDelete); //-1 
  
// //   console.log(index);
// //   employeeList.splice(index,1); // start from index 1, making new 
  
// //   return res.send("Success");
// //   })

// // to modify task
// app.put('/employee', (req, res) => {
//   const {id, firstname} = req.body;
//   // const empId = req.body.id;
//   console.log(req.body.id);

//   // const newDep = req.body.department;
//   // if (empId === 'ss/:id'){
//   //   employeeList[empId].department = newDep;
//   // }
// // if(employeeList[req.params]){
// //   console.log("yeah");// const id = (req.params);

// // employeeList = employeeList.map((data)=>{
// //   if(data.id===req.body.id){
// //     return {
// //       ...data,
// //       firstname: req.department
// //     };
// //   }else{
// //     return data;
// //   }
// // })

// return res.send("Succeess!");
// // }
// })

//  //define a route
//  app.get("/", (req, res) => {

//   res.send("hello world!");
  
// });

// app.get (`/employee`, (req, res) => { res.json(employeeList);});

// app.listen(8000, () => {
  
//   console.log(`Server listening on port ${8000}`);
// });