const express= require('express');
const router = express.Router();
const {Employee,Task} = require('../models')

// router.get('/',(req,res)=>{
//     res.send('+++ ALL Task +++');
//   });
  
  router.get('/', function(req,res,next){
    Task.findAll({include:["employee"]})
    .then (task =>res.status(200).json(task))
    .catch(err => next(err));
   });
  // router.get('/', function(req,res,next){
  //   Task.findAll({
  //     include:[{
  //       model:Employee,
  //       where:{taskId :Sequelize.col('task.id')}
  //     }]
  //   })
  //   .then (task =>res.status(200).json(task))
  //   .catch(err => next(err));
  //  });


   router.get('/:id',function(req,res,next){
       Task.findOne({
         where:{
           id:req.params.id
         },
         include:["employee"]
       })
       .then (task => res.status(200).json(task))
       .catch(err => next(err));
   });
   
   router.post('/', function(req,res,next){
     Task.create(req.body)
     .then(factor => {
       res.status(200).json(factor)})
     .catch(err=>next(err));
   })
   
   router.delete('/:id',function(req,res){
     Task.destroy({ 
       where:{
         id:req.params.id
       },
     });
     res.status(200).json("DELETED WELL");
   })
   
   
   router.put('/:id', function(req,res){
    Task.update(req.body,{
       where:{
         id:req.params.id
       } 
     })
     .then (factor =>{
       res.status(200).json(factor)})
     .catch(err=>next(err));
     //?
     });
     
  module.exports=router;