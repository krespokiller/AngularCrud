const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(morgan('dev'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/api' , require('./routes/sellers.routes'))
module.exports=app;