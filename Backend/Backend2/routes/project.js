var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  next()
})
/* GET home page. */
router.get('/', function(req, res, next) {
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("hr");
    
    dbo.collection("employeeleaves").find({}).toArray(function(err, result){
     // dbo.collection("inventry").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.name);
      // res.json([
      //   {id :1, email:response.email,password:response.password}
       
      // ]);
      res.json(result);
      db.close();
    });
  });

});

router.get('/empLeave', function(req, res, next) {
    response = {
      empId:req.query.empId
     
   };
//    var shortLeave=0;
//    var halfDay=0;
//    var allocated=0;
//    var medical=0;

   MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("hr");
   var query = {employeeId: response.empId,status:"Approved",type:"SHORTLEAVE"};
    //  var query = {employeeId: "5dbd403eee20652224d4f28d"};
    dbo.collection("employeeleaves").find(query).toArray(function(err, result) {
      if (err) throw err;
      shortLeave=result.length;
      db.close();
    });
  });
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("hr");
   var query = {employeeId: response.empId,status:"Approved",type:"SHORTLEAVE"};
    //  var query = {employeeId: "5dbd403eee20652224d4f28d"};
    dbo.collection("employeeleaves").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result.length);
      shortLeave=result.length;
      db.close();
    });
  });
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("hr");
   var query = {employeeId: response.empId,status:"Approved",type:"HALFDAY"};
    //  var query = {employeeId: "5dbd403eee20652224d4f28d"};
    dbo.collection("employeeleaves").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result.length);
      halfDay=result.length;
      db.close();
    });
  });
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("hr");
   var query = {employeeId: response.empId,status:"Approved",type:"MEDICAL"};
    //  var query = {employeeId: "5dbd403eee20652224d4f28d"};
    dbo.collection("employeeleaves").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result.length);
      medical=result.length;
      db.close();
    });
  });
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("hr");
   var query = {employeeId: response.empId,status:"Approved",type:"ALLOCATED"};
    //  var query = {employeeId: "5dbd403eee20652224d4f28d"};
    dbo.collection("employeeleaves").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result.length);
      allocated=result.length;
      db.close();
    });
  });
  res.json(
    {allocated :allocated, medical:medical,halfDay :halfDay, shortLeave:shortLeave}
   
  );

  });

module.exports = router;

