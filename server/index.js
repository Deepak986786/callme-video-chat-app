const express = require('express')

const cors = require('cors')

const port = 8000 

const app = express();

app.get('/', (req, res) =>{
    res.send('welcome to chat backend')
})

app.use(cors({origin:'*'}));

const server = app.listen(port, ()=>console.log('server listening on port',port))

const io = require('socket.io')(server);

io.on('connection',async function(socket){
    console.log('client connected');
   

    socket.on('sendMessage' ,(msg)=>{
        console.log("message recieved",msg)


        socket.emit('receivedMessage',msg);
    
    })

    socket.on('disconnected',()=>{
        console.log("client disconnected");
    })
})
