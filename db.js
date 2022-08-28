// const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')
const User = require("./models/User");

let dbConnection
let url = 'mongodb+srv://tracking:12345@tracking-db.jmv7pxg.mongodb.net/'

async function connectToDb() {
  return new Promise((resovle, reject) => {
    mongoose.connect(url, async (err, res) => {
      if (err) {
        console.log("The database is not connected");
        return reject(err)
      }
      console.log("the database is connected");
      User.find({}).limit(5).then(docs => {
        console.log("the data is ");

        console.log(docs)
      }).catch(err11 => {
        console.log(err1)
      })
      return resovle();
    });
  })
}

module.exports = connectToDb;