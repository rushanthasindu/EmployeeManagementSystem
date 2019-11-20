const express = require("express");
const Leave = require("../models/EmployeeLeave");
const service = require("../services/UtilService");

const EmployeeLeaveRouter = express.Router();

// Getting all leave data
EmployeeLeaveRouter.get("/", async (req, res) => {
  try {
    const leaveList = await Leave.find();
    res.json(leaveList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Creating new leave
EmployeeLeaveRouter.post("/", async (req, res) => {
  const {
    employeeId,
    type,
    leaveStart,
    leaveEnd,
    reason,
    status,
    approvedBy
  } = req.body;
  
  const leaveRequest = new Leave({
    employeeId,
    leaveStart,
    leaveEnd,
    reason,
    type,
    status,
    approvedBy
  });

  try {
    const newLeave = await leaveRequ
    eave.save();
    res.json(updatedLeave);
  } catch {
    res.status(400).json({ message: err.message });
  }
});

// Deleting given leave
EmployeeLeaveRouter.delete("/:id", service.getLeaveById, async (req, res) => {
  try {
    await res.leave.remove();
    res.json({ employeeId: res.leave.employeeId });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = EmployeeLeaveRouter;
