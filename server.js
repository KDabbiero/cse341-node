const express = require("express");
const connectDB = require('./db/connection');
const app = express();

connectDB();

app.use(express.json({extended:false}));
app.use('/api/contactModel', require('./api/user'))
const Port = process.env.Port || 3000;

app.listen(Port, () => console.log('Server started'));