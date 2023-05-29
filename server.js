// Purpose: Entry point for the server

// Import express
const express = require('express');

const dotenv = require('dotenv').config();

// initialize express app
const app = express();

const PORT = process.env.PORT || 6000;


app.use("/api/v1/contacts", require('./routes/contactRoutes'));


app.listen(PORT, () => {
  console.log('listening on port', PORT);
}); 