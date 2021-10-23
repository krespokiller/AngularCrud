const database = require('./db/database')

const app = require('./app')
app.listen(process.env.PORT);
console.log(`port: ${process.env.PORT}`);