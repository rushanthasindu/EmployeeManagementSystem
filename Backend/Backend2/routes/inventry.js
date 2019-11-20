var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var url = "mongodb://localhost:27017/";
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
    
    dbo.collection("inventry").find({}).toArray(function(err, result){
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


router.get('/getItem', function(req, res, next) {
  
   response = {
       itemId:req.query.itemID,
       qty:req.query.qty
    };
    
    console.log(response.itemId);
var o_id = new ObjectId(response.itemId);

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hr");
  var query = {_id:o_id};
  dbo.collection("inventry").findOne(query, function(err, result) {
    if (err) throw err;
    console.log(result.balance);
    balance=result.balance;
    var myquery = {_id: o_id};
    var newvalues = { $set: {balance: balance-response.qty } };
    dbo.collection("inventry").updateOne(myquery, newvalues, function(err, result) {
      if (err) throw err;
      console.log("1 document updated");
      res.json([
        {status :1}
       
      ]);
     
    });
    if (balance-response.qty) sendMail();
    db.close();
  });
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
  to: 'minor@gmail.com',
  subject: 'Items Running out',
  text: 'Some items are running out. please Chevk it out '
}
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("hr");
  //   var myquery = {_id: o_id};
  //   var newvalues = { $set: {balance: balance-response.qty } };
  //   dbo.collection("inventry").updateOne(myquery, newvalues, function(err, result) {
  //     if (err) throw err;
  //     console.log("1 document updated");
  //     res.json([
  //       {status :1}
       
  //     ]);
  //     db.close();
  //   });
  // });



  });



router.get('/addNew', function(req, res0, next) {
    response = {
      itemCode:req.query.itemCode,
      description:req.query.description,
      qty:req.query.qty
   };

   MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("hr");
    var myobj = { itemCode: response.itemCode, description:  response.description, qty: response.qty , balance: response.qt};
    dbo.collection("inventry").insertOne(myobj, function(err, res) {
      if (err)  res0.json([
        {status :false}
       
      ]);
      console.log("1 document inserted");
      res0.json([
        {status :true}
       
      ]);
      db.close();
    });
  });
    // res.json([
    //   {id :1, email:response.email,password:response.password}
     
    // ]);
  });

  
  
//   router.get('/inform', function(req, res, next) {
//     response = {
//       empID:req.query.projectId
 
//    };
// //
   

//    MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("hr");

 
//       var o_id = new ObjectId(response.email);
//       var query = {_id:o_id};
//       dbo.collection("employees").findOne(query, function(err, result1) {
//         if (err) throw err;
//         // console.log(result1.email);
//         sendMail(result1.email);
//       });
      
//       res.json([{status:true}]);
//       db.close();
//     });
//   });
  
//   // res.json(
//   //   {allocated :allocated, medical:medical,halfDay :halfDay, shortLeave:shortLeave}
   
//   // );


// }

module.exports = router;

