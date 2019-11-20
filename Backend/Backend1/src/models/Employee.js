const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  id: {
    type: String
  },
  firstName: {
    type: String
    
  },
  religion: {
    type: String
  },
  empId: {
    type: String
  },
  lastName: {
    type: String
    
  },
  address: {
    type: String
    
  },
  city: {
    type: String
    
  },
  country: {
    type: String
    
  },
  postalCode: {
    type: Number
    
  },
  status: {
    type: String
    ,
    enum: ["ALLOCATED", "FREE"],
    default: "FREE"
  },
  skills: {
    type: Array
    // 
  },
  createdAt: {
    type: Date
    ,
    default: Date.now
  },
  email: {
    type: String
    
  },
  password: {
    type: String
  },
  numOfProject: {
    type: Number
    ,
    default: 0
  },
  reliability: {
    type: Number
    ,
    default: 0
  },
  role: {
    type: String
    ,
    enum: ["EMPLOYEE", "ADMIN", "GM", "HRM", "MINERSTAFF"],
    default: "EMPLOYEE"
  },
  manager: {
    type: String
  }
});

module.exports = mongoose.model("Employee", employeeSchema);
