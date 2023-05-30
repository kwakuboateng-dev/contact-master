// Purpose: Entry point for the server

const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middlewares/errorHandler');



// initialize express app
const app = express();

app.use(express.json());
app.use(errorHandler); 

const PORT = process.env.PORT || 6000;


app.use("/api/v1/contacts", require('./routes/contactRoutes'));


app.listen(PORT, () => {
  console.log('listening on port', PORT);
}); 