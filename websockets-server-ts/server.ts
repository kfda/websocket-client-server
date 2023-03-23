import { WebSocket } from "ws";
import User from "./User";

const port = 3000;
const wss = new WebSocket.Server({ port: port });
// allow cors
wss.on("headers", (headers: any, req: any) => {
  headers["Access-Control-Allow-Origin"] = "*";
  headers["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept";
});


wss.on("connection", (ws: WebSocket) => {
  console.log("Client Connected!")

  ws.on('message', (message: string) => {
    const parsedMessage = JSON.parse(message);
    // get user/s 
    if(parsedMessage.type === 'getUsers') {
      const user = new User();
      const users = user.getUsers(parsedMessage.data.id);
      ws.send(JSON.stringify({
        type: 'getUsers',
        data: users
      }));
    }

    // remove a user
    // if(parsedMessage.type === 'removeUser') {
    //   const user = new User();
    //   const users = user.removeUser(parsedMessage.data.id);
    //   ws.send(JSON.stringify(users));
    // }

  })
})




console.log(`websocket server started on port ${port}`);