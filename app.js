const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const  connectToDb  = require('./db')
const { ObjectId } = require('mongodb')

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

let db

connectToDb((err) => {
  if(!err){
   
    db = getDb()
  }
}).then(res => {
  app.listen('3000', () => {
    console.log('app listening on port 3000')
  })
}).catch(err => {
  console.log(err);
})


// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.send("Welcome "));
app.use(authRoutes);
