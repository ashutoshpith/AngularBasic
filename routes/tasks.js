const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');

let db = mongojs('mongodb://ashutosh:dgtwa34892@ds247330.mlab.com:47330/dgtwa', ['tasks']);

router.get('/tasks', function(req, res, next){
 db.tasks.find(function(err, tasks) {
   if(err){
     res.send(err);
   }
   res.json(tasks);
   
 });

  
});

module.exports = router;