const express = require('express')
const app = express()
const http = require('http').createServer(app)

const PORT = process.env.PORT || 4500

http.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/src'))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public')
})

// Socket 
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

})