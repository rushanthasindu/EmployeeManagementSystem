const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectId: {
    type: String
  },
  projectCode: {
    type: String
  },
  customerName: {
    type: String
  },
  customerContact: {
    type: String
  },
   customerEmail: {
     type: String
   },
  projectName: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    
    default: Date.now
  },
  endDate: {
    type: Date,
    
    default: Date.now
  },
  actualCompletionDate: {
    type: Date,  
    
  },

  type: {
    type: String,
     enum: ["java", "node", "react", "python"]
  },
  allocation: {
    type: Array,
     default: []
  },
  comment: {
    type: String
  },

  type1: {
    type: String,
     enum: ["java", "node", "react", "python"]
  },
  allocation1: {
    type: Array,
     default: []
  },
  comment1: {
    type: String
  },

  type2: {
    type: String,
     enum: ["java", "node", "react", "python"]
  },
  allocation2: {
    type: Array,
     default: []
  },
  comment2: {
    type: String
  },

  type3: {
    type: String,
     enum: ["java", "node", "react", "python"]
  },
  allocation3: {
    type: Array,
     default: []
  },
  comment3: {
    type: String
  },

  type4: {
    type: String,
     enum: ["java", "node", "react", "python"]
  },
  allocation4: {
    type: Array,
     default: []
  },
  comment4: {
    type: String
  },

  type5: {
    type: String,
     enum: ["java", "node", "react", "python"]
  },
  allocation5: {
    type: Array,
     default: []
  },
  comment5: {
    type: String
  },

  type6: {
    type: String,
     enum: ["java", "node", "react", "python"]
  },
  allocation6: {
    type: Array,
     default: []
  },
  comment6: {
    type: String
  },

  type7: {
    type: String,
     enum: ["java", "node", "react", "python"]
  },
  allocation7: {
    type: Array,
     default: []
  },
  comment7: {
    type: String
  },

  type8: {
    type: String,
     enum: ["java", "node", "react", "python"]
  },
  allocation8: {
    type: Array,
     default: []
  },
  comment8: {
    type: String
  },

  type9: {
    type: String,
     enum: ["java", "node", "react", "python"]
  },
  allocation9: {
    type: Array,
     default: []
  },
  comment9: {
    type: String
  },

 



  completionRate: {
    type: Number,
    
    default: 0
  }
});

module.exports = mongoose.model("Project", projectSchema);
