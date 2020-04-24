const express = require('express');
const app = express();
const authroute = require('./Routes/auth_outes.js');
const mongoose = require('mongoose');
const passportsetup = require('./config/passport_setup.js');

//set up view engine 
app.set('view engine', 'ejs');

//set up mongoDB conncetion

mongoose.connect('mongodb+srv://test:test@test-lahfl.mongodb.net/test?retryWrites=true&w=majority', () => {
    console.log('connected to mongoDB');
});

//auth routes
app.use('/auth', authroute);

//home route

app.get('/', (req, res) => {
    res.render('home');
});


//listen on port 
app.listen(3000, () => {
    console.log("listening on 3000");
});