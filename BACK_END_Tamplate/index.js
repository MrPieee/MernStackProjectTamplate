const app = require('./app');
const DBCONNECT = require('./connectDB/connectDB');

require('dotenv').config();

const PORT = process.env.PORT || 1618;


app.listen(PORT,async()=>{
    await DBCONNECT();
    console.log(`The Server has been started successfully in http://localhost:${PORT}. `);
});