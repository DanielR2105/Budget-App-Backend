// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();
const transactionsController = require("./controllers/transactions.controller")
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the Budgeting App");
  });
  
  app.use("/transactions", transactionsController)
  
  app.get("/*", (req, res) => {
      res.status(404).json({ error: "Page not found" });
    });
  
  // EXPORT
  module.exports = app;