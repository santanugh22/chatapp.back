import { io } from "../app.js";
import jwt from "jsonwebtoken";

const activeUsers = {};

async function chatServer() {

  console.log("Chat server ignited");
  io.on("connection", (socket) => {
    console.log(socket.id);
  });
}

export { chatServer };
