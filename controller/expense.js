//create expense into the datbase
const Expense = require("../models/expense");

exports.postExpense = (req, res) => {
  Expense.create({
    amount: +req.body.amount,
    description: req.body.description,
    catagory: req.body.catagory,
  })
    .then((created) => {
      res.json(created);
    })
    .catch((err) => console.log(err));
};
exports.getExpenses = (req, res) => {
  Expense.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getExpense = (req, res) => {
  const id = req.params.id;
  Expense.findByPk(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateExpense = (req, res) => {
  const id = req.params.id;
  Expense.findByPk(id)
    .then((expense) => {
      expense.amount = req.body.amount;
      expense.description = req.body.description;
      expense.catagory = req.body.catagory;
      return expense.save();
    })
    .then((data) => {
      res.end();
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
};
exports.deleteExpense = (req, res) => {
  const id = req.params.id;

  Expense.findByPk(id)
    .then((expense) => {
      return expense.destroy();
    })
    .then((deleteItem) => {
      res.json(deleteItem);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
