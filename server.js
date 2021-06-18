if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express') //import express from the librabry
const app = express() //calls on the express variable as a method, calls on the function
const expressLayouts = require('express-ejs-layouts') //requires the layouts packaging as well
//the following configures the express app

const indexRouter = require('./routes/index') // the slash shows that its relative to where we are

app.set('view engine', 'ejs') //
app.set('views',__dirname + '/views')
app.set('layout','layouts/layout') // this will access all the layouts at ince instead of it being one by one
app.use(expressLayouts) //this uses the Layouts variable declared above 
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
useNewUrlParser : true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000) // we want it to listen to ..this pulls from the environment variable,, sinec the server is not telling us anything then we are creating the 3000 environment connection 

