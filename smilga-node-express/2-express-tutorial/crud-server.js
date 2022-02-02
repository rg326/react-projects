const express = require('express')
const app = express()
let {people} = require('./data')

//remember app.use applies middleware to all our routes, and can also serve up a public/statis folder
//static assets
app.use(express.static('.methodss-public'))

//parse form data
app.use(express.urlencoded({extended: false}))

//the default method the browser performs
app.get('/api/people',(req, res)=>{
    res.status(200).json({success:true, data:people})
})

app.post('/login',(req, res)=>{
    console.log(req.body)
    const {name} = req.body
    if(name){
        return res.status(200).send('Welcome')
    } else {
    res.send('POST')
    }
})

app.post('api/postman/people'),(req, res)=>{
    const {name} = req.body
    if(!name){
        return res
        .status(400)
        .json({ success: false, msg: 'please provide name value'})
    }
    res.status(201).send({ success: true, data: [...people, name]})
}

app.listen(5000, ()=>{
    console.log('Server is running on port 5000...')
})