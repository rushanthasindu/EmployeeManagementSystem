const express = require("express");
const Project = require("../models/Project");
const service = require("../services/UtilService");

const projectRouter = express.Router();

// Getting all project data
projectRouter.get("/", async (req, res) => {
  try {
    const projectList = await Project.find();
    res.json(projectList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Creating new project
projectRouter.post("/", async (req, res) => {
  const {
    projectName,
    startDate,
    endDate,
   
    completionRate,
    customerEmail,
    customerContact,

    type,
    allocation,
    comment,

    type1,
    allocation1,
    comment1,

    type2,
    allocation2,
    comment2,

    type3,
    allocation3,
    comment3,

    type4,
    allocation4,
    comment4,

    type5,
    allocation5,
    comment5,

    type6,
    allocation6,
    comment6,

    type7,
    allocation7,
    comment7,

    type8,
    allocation8,
    comment8,

    type9,
    allocation9,
    comment9,
    

    actualCompletionDate,
    customerName
  } = req.body;
  const project = new Project({
    projectName,
    startDate,
    endDate,
    
    
    completionRate,
    customerEmail,
    customerContact,

    type,
    allocation,
    comment,

    type1,
    allocation1,
    comment1,

    type2,
    allocation2,
    comment2,

    type3,
    allocation3,
    comment3,

    type4,
    allocation4,
    comment4,

    type5,
    allocation5,
    comment5,

    type6,
    allocation6,
    comment6,

    type7,
    allocation7,
    comment7,

    type8,
    allocation8,
    comment8,

    type9,
    allocation9,
    comment9,
    
    actualCompletionDate,
    customerName
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
    
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



// Get project by Id
projectRouter.get("/:id", service.getProjectById, (req, res) => {
  res.json(res.project);
});

// Updating Project By Id
projectRouter.put(
  "/:id",
  service.updateProjectCompletion,
  async (req, res) => {
    const keyList = Object.keys(req.body);
    keyList.map(key => {
      if (req.body[key] != null) {
        res.project[key] = req.body[key];
      }
    });
    try {
      const updatedProject = await res.project.save();
      res.json(updatedProject);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
);

// Deleting given project
projectRouter.delete("/:id", service.getProjectById, async (req, res) => {
  try {
    await res.project.remove();
    res.json({ message: "Deleted The Project" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = projectRouter;
