const express=require('express');
const app=express()

const bookingfromRoute=require('./Routes/bookform');

app.use('/',bookingfromRoute)

app.listen(3000)