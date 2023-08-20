//create expense into the datbase
const Expense = require("../models/expense");
exports.postExpense = (req, res) => {
  console.log(req.body);
  // Expense.create({
  //   amount: req.body.amount,
  //   description: req.body.description,
  //   catagory :  req.body.
  // });
};
