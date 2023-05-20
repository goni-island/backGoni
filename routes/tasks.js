const express= require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.send('+++ ALL Task +++');
  });
  
  router.get('/:id',(req,res)=>{
    res.send('TASK');
    // console.log(req.params.id)
  });

  module.exports=router;