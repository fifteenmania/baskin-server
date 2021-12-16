import { Express } from 'express'
import WebSocket, {WebSocketServer} from 'ws'

const matchNum = 1;

const wss = new WebSocketServer({port: 8080})

wss.on("connection", (ws) => {
    ws.on("message", (data) => {
        console.log(`received ${data}`)
    })

    ws.send("hello hello")
})
