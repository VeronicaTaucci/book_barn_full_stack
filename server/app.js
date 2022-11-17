//? create app.js and set it up. 

//? (1) npm init 
// package-lock.json is created and is going to keep track of all modules that will be installed//
//? (2) npm install //<all the packages that you need, example: express cors>
// node_modules are getting created, 
const express = require('express') //this is a function block that has to be called //layer built on the top of the Node js that helps manage servers and routes.
const app = express() //invoking the function will return an object (instance of express)
var cors = require('cors') //CORS (cross origin resource sharing) is a technique that allows calls to be made from code that is running in a browser to a third-party server
app.use(cors()) //Enable All CORS Requests
let port = process.env.PORT || 8080 // process.env.PORT will be the port assigned by the platform where the server side will be hosted 


const router = express.Router();

//! dataBase
//? (3) npm install pg pg-hstore 
// pg - a collection of Node. js modules for interfacing with a PostgreSQL database.
// pg-hstore a node package for serializing and deserializing JSON data to hstore format
//? (4) run: sequelize init 
// initialize a project (assuming you have CLI installed) // this will create: models, migrations, seeders, config (configuration of our database)
//? (5)set up your database
//? (6) import database
const db = require('./models')



//get all the books
app.get('/',async (req,res)=>{ //route handler
    let result = await db.books.findAll({})
    res.json({result})
})

app.listen(port,()=>{
    console.log(`listening on port: ${port}`)
})

