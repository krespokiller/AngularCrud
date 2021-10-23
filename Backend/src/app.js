const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const app = express();
app.use(morgan('dev'));


app.use('/api' , require('./routes/sellers.routes'))
module.exports=app;