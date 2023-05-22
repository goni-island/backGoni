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
        department : "CAT",
    });
    const DataThree = await Employee.create({
        firstname : "Rina",
        lastname: "Park",
        department : "ART"
    });

    console.log('--------CHECK----------');
    console.log(Data instanceof Employee); //true

    const DataTwo = await Task.create({
        description: 'Eat Breakfast',
        prioritylevel : 1,
        completion : 'NOT DONE'
    });
    
    const DataFour = await Task.create({
        description: 'Client Meeting',
        prioritylevel : 3,
        completion : 'DONE'
        // employeeId : 1,
    });
    console.log('--------CHECK----------');
    console.log(DataTwo instanceof Task); //true
    await DataFour.setEmployee(Data);
    await DataTwo.setEmployee(Data);
}

module.exports = seedDB;