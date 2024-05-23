import { WebSocketServer } from 'ws'
const websocket = new WebSocketServer({ port: 8080 })


let users = []

websocket.on('connection', ws => {
    users.push(ws)
    ws.on('message', (e) => {
        for (const user of users) {
            user.send(e.toString())
        }
    })
})

