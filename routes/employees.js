//   node --inspect-brk index.js //to debug  
const express= require('express');
const router = express.Router();


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
    

// -> router 때문에
// =  localhost:4000/employees 
router.get('/',(req,res)=>{
  
    res.send('+++ ALL EMP +++')
  });
  
  router.get('/:id',(req,res)=>{
    // console.log(req.params.employees);
    res.send('EMP');
  })

  module.exports=router;