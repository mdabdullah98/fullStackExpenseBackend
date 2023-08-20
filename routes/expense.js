const express = require("express");
const route = express.Router();
const router = require("../controller/expense");

route.post("/add-expense", router.postExpense);

module.exports = route;
