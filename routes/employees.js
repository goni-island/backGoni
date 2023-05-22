//   node --inspect-brk index.js //to debug  
const express= require('express');
const router = express.Router();
const {Employee,Task} = require('../models')

// -> router 때문에
// =  localhost:4000/employees 
router.get('/',function(req,res,next){
 Employee.findAll({include:["task"]})
 .then (employee =>res.status(200).json(employee))
 .catch(err => next(err));
});

  
router.get('/:id',function(req,res,next){
    // console.log(req.params.employees);
    Employee.findOne({
      where:{
        id:req.params.id
      },
      include:["task"]
    })
    .then (employee => res.status(200).json(employee))
    .catch(err => next(err));
});

router.post('/', function(req,res,next){
  Employee.create(req.body)
  .then(factor => {
    res.status(200).json(factor)})
  .catch(err=>next(err));
})

router.delete('/:id',function(req,res){
  Employee.destroy({
    where:{
      id:req.params.id
    }
  });
  res.status(200).json("DELETED WELL");
})


router.put('/:id', function(req,res){
  Employee.update(req.body,{
    where:{
      id:req.params.id
    } 
  })
  .then (factor =>{
    res.status(200).json(factor)})
  .catch(err=>next(err));
  //?
// function AuthenticatorResponse(req,res,next){
//     if(req.session){
//       if(req.session.id){
//         next()
//       }else{
//         res.redirect('/addEmployee')
//       }
//     }
//   }

//   router.post('/:id',(req,res)=>{
//     let firstname = req.body.firstname; //body is not defined
//     let lastname = req.body.lastname;
//     let department = req.body.department;
//     console.log(firstname);
//     console.log(lastname);
//     console.log(department);
//     res.send('=TEST=');
    
//     })

});
  module.exports=router;