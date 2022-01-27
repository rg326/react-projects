const express = require('express')
const app = express()
let {people} = require('./data')

//remember app.use applies middleware to all our routes, and can also serve up a public/statis folder
//static assets
app.use(express.static('.methodss-public'))

//parse form data
app.use(express.urlencoded({extendd: false}))

//the default method the browser performs
app.get('/api/people',(req, res)=>{
    res.status(200).json({success:true, data:people})
})

app.post('/',(req, res)=>{
    res.send('POST')
})

app.listen(5000, ()=>{
    console.log('Server is running on port 5000...')
})