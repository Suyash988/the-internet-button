import path from 'path'
import http from 'http'
import express from 'express'
import { Server as socketIO } from 'socket.io'




const port = process.env.PORT || 3000;
const app = express()
const server = http.createServer(app)
const io =  new socketIO(server);

//Serve the static files from the public directory
const publicPath = path.join(new URL('.', import.meta.url).pathname.substring(1));

app.use(express.static(publicPath))

// send the index.html files
app.get('*', (req,res) => {
    const indexPath = path.resolve(publicPath, '../public/index.html')
    res.sendFile(indexPath)
})

io.on('connection', (socket) => {
    console.log("A user is just connected.")
    socket.on('disconnect', () => {
        console.log("A user has disconnected.")
    })
});

socket.on('StartGame', () => {
    io.emit('Start Game')
})

server.listen(port, () => {
    console.log(`Server is running at the port: ${port}`)
})
