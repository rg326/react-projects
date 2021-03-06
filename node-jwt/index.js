const express = require('express');
const app = express();

//Import Routes
const authRoute = require('.routes/path');

//Route Middlewares
app.use('api/user', authRoute);

app.listen(3000, ()=>{
    console.log('Server up and running');
})