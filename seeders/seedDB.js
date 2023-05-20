const Task = require('../models/task');
const Employee = require('../models/employees');
// Sequelize provides the create method, 
// which combines the build and save methods shown above into a single method:
// const jane = await User.create({ name: "Jane" });
// // Jane exists in the database now!
// console.log(jane instanceof User); // true
// console.log(jane.name); // "Jane"

const seedDB = async () =>{
    const Data = await Employee.create({
        firstname : "Saewoo",
        lastname: "ChoiPark",
        department : "CAT"
    });
    console.log('--------CHECK----------');
    console.log(Data instanceof Employee); //true

    const DataTwo = await Task.create({
        task : 'PROJECT',
        description: 'NOT WORKING WHY...',
        status : false
    });
    console.log('--------CHECK----------');
    console.log(DataTwo instanceof Task); //true
   
}

module.exports = seedDB;