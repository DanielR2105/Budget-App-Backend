const express = require("express")
const transactions = express.Router()
const transactionsData = require("../models/transactions")

transactions.get("/", (req, res) => {
    res.json(transactionsData)
})

// CREATE
transactions.post("/", (req, res) => {
    transactionsData.push(req.body);
    res.json(transactionsData[transactionsData.length - 1]);
  });

  transactions.get("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    if (transactionsData[arrayIndex]) {
      res.status(200).json(transactionsData[arrayIndex]);
    } else {
        res.redirect("/error");
    }
  });

  transactions.delete("/:index", (req, res) => {
    const deletedTransaction = transactionsData.splice(req.params.index, 1);
    res.status(200).json(deletedTransaction);
  });
  
  transactions.put("/:index", (req, res) => {
    const { index } = req.params;
    if (transactionsData[index]) {
        transactionsData[index] = req.body;
      res.status(200).json(transactionsData[index]);
    } else {
        res.redirect("/error");
    }
  });

module.exports = transactions