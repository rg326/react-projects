const http = require('http')

const server = http.createServer((req, res0=>{
    console.log('User hit the server')
    res.end('home page')
})

server.listen(5000)