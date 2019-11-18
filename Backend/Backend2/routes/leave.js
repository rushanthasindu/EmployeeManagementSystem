var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var ObjectId = require('mongodb').ObjectId;
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
   var shortLeave=0;
   var halfDay=0;
   var allocated=0;
   var medical=0;
   function f(data){
     allocated=data;

   }
router.get('/empLeave', function(req, res, next) {
    response = {
      empId:req.query.empId
 
   };

   

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

  router.get('/empLeaveList', function(req, res, next) {

    var data=[];

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("hr");;
      dbo.collection("employees").find({}).toArray(function(err, result) { 
        if (err) throw err;
        for(i=0;i<result.length;i++){
        id=result[i]._id;
        empId=result[i].empId;
        fname=result[i].firstName;
        lname=result[i].lastName;
        console.log(id);
        var shortLeave=0;
        var halfDay=0;
        var medical=0;
        var allocated=0;


                var query1 = {employeeId: ""+id,status:"Approved",type:"SHORTLEAVE"};
                dbo.collection("employeeleaves").find(query1).toArray(function(err1, result1) {
                shortLeave=result1.length;
               
                var query1 = {employeeId: empId,status:"Approved",type:"HALFDAY"};
                dbo.collection("employeeleaves").find(query1).toArray(function(err1, result1) {
                halfDay=result1.length;
                 console.log(shortLeave);
                });
                });
                
                var query1 = {employeeId: empId,status:"Approved",type:"MEDICAL"};
                dbo.collection("employeeleaves").find(query1).toArray(function(err1, result1) {
                medical=result1.length;
                });
                var query1 = {employeeId: empId,status:"Approved",type:"ALLOCATED"};
                dbo.collection("employeeleaves").find(query1).toArray(function(err1, result1) {
                allocated=result1.length;
                });
                console.log(shortLeave);
                data1={"employeeId":empId,"firstName":fname,"lastName":lname,"shortLeave":shortLeave,"halfDay":halfDay,"medical":medical,"allocated":allocated},
       data.push(data1);
               /// console.log(data1);
        
     
      }
       res.json(data);
    });
   
        
    // db.close();
    });




//     response = {
//       empId:req.query.empId
     
//    };

 

//    MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("hr");
//    var query = {employeeId: response.empId};
//     //  var query = {employeeId: "5dbd403eee20652224d4f28d"};
//     dbo.collection("employees").find(query).toArray(function(err, result) {
//       if (err) throw err;
//       shortLeave=result.length;
//       db.close();
//     });
//   })

// //  MongoClient.connect(url, function(err, db) {
// //     if (err) throw err;
// //     var dbo = db.db("hr");
// //    var query = {employeeId: response.empId,status:"Approved",type:"SHORTLEAVE"};
// //     //  var query = {employeeId: "5dbd403eee20652224d4f28d"};
// //     dbo.collection("employeeleaves").find(query).toArray(function(err, result) {
// //       if (err) throw err;
// //       shortLeave=result.length;
// //       db.close();
// //     });
// //   });
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("hr");
//    var query = {employeeId: response.empId,status:"Approved",type:"SHORTLEAVE"};
//     //  var query = {employeeId: "5dbd403eee20652224d4f28d"};
//     dbo.collection("employeeleaves").find(query).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result.length);
//       // if (result.length!=0) console.log("resulh");
//       // else console.log("result.length");
     
//       if (result.length!=0)  shortLeave=result.length;
//       else  shortLeave=0;
//       db.close();
//     });
//   });
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("hr");
//    var query = {employeeId: response.empId,status:"Approved",type:"HALFDAY"};
//     //  var query = {employeeId: "5dbd403eee20652224d4f28d"};
//     dbo.collection("employeeleaves").find(query).toArray(function(err, result) {
//       if (err) throw err;
//       // console.log(result.length);
//        if (result.length!=0)  halfDay=result.length;
//       else  halfDay=0;
     
    
//       db.close();
//     });
//   });
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("hr");
//    var query = {employeeId: response.empId,status:"Approved",type:"MEDICAL"};
//     //  var query = {employeeId: "5dbd403eee20652224d4f28d"};
//     dbo.collection("employeeleaves").find(query).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result.length);
//       if (result.length!=0)  medical=result.length;
//       else  medical=0;
     
//       db.close();
//     });
//   });
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("hr");
//    var query = {employeeId: response.empId,status:"Approved",type:"ALLOCATED"};
//     //  var query = {employeeId: "5dbd403eee20652224d4f28d"};
//     dbo.collection("employeeleaves").find(query).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result.length);
//       if (result.length!=0)  allocated=result.length;
//       else  allocated=0;
//       db.close();
//     });
//   });
//   res.json(
//     {allocated :allocated, medical:medical,halfDay :halfDay, shortLeave:shortLeave}
   
//   );
























  
  });

module.exports = router;
















































