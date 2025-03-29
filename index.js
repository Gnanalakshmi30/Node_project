const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const routes = require('../Node_project/src/Routes/route')

const app = express()
app.use(express.json()); 

mongoose.connect(process.env.DBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Connection error', error));
  
app.use('/api', routes);
app.listen(process.env.PORT, () => {
    console.log("Server is running");  
})