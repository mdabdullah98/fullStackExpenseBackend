const express = require("express");
const route = express.Router();
const router = require("../controller/expense");

route
  .post("/add-expense", router.postExpense)
  .get("/get-expneses", router.getExpenses)
  .get("/single-expense/:id", router.getExpense)
  .patch("/updating-expense/:id", router.updateExpense)
  .delete("/delete-expense/:id", router.deleteExpense);

module.exports = route;
