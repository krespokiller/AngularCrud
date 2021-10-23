const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_CNN)
    .then(()=>console.log(`db is connected`))
    .catch(err=>console.error(err))