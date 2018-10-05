require('dotenv').config();
const express = require("express");
const multipart = require("connect-multiparty");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const wedding = require('./routes/wedding.route');

const app = express();
app.use(cors());


// set up mongoose connection
let mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', wedding);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})