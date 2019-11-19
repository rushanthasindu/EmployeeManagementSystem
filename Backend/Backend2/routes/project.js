var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var ObjectId = require('mongodb').ObjectId;
var nodemailer = require('nodemailer');


router.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  next()
})
/* GET home page. */
router.get('/', function(req, res, next) {
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("hr");
    
    dbo.collection("projects").find({}).toArray(function(err, result){
     // dbo.collection("inventry").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.email);
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


  

  router.get('/inform', function(req, res, next) {
    response = {
      projectId:req.query.projectId
 
   };
//
   

   MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("hr");
  //  var query = {employeeId: response.empId,status:"Approved",type:"SHORTLEAVE"};
      var query = {projectName: "SecondYear Project"};
    // dbo.collection("projects").find(query).toArray(function(err, result) {
       dbo.collection("projects").find({}).toArray(function(err, result) {
      if (err) throw err;
      //console.log();
      var o_id = new ObjectId(result[result.length-1].allocation[0]);
      var query = {_id:o_id};
      dbo.collection("employees").findOne(query, function(err, result1) {
        if (err) throw err;
        // console.log(result1.email);
        sendMail(result1.email);
      });
      
      
      db.close();
    });
  });
  
  // res.json(
  //   {allocated :allocated, medical:medical,halfDay :halfDay, shortLeave:shortLeave}
   
  // );

  });

var sendMail=(email)=>{
  // console.log(email);
  
 var transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'service@hotelforyou.xyz',
    pass: 'oGxJe1jk6=oPi@2!zz'
  }
});

var mailOptions = {
  from: 'service@hotelforyou.xyz',
  to: email,
  subject: 'Project Assignned',
  text: 'You Are Assigned To A Project. Please Login To Your Account  '
}
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
module.exports = router;

