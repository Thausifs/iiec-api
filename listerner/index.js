import { studentstream } from "./studentlister";
const socket_io = require("socket.io");

const io = socket_io();
const socketApi = {};
socketApi.io = io;

export default async function websocketconnection() {
  console.log("🚀 web socket coonection..");
  try {
    io.of("/socket/connection").on("connection", (socket) => {
      console.log("🚀 socket.io: User connected: ", socket.id);

      socket.on("disconnect", () => {
        console.log("socket.io: User disconnected: ", socket.id);
      });
    }); // token auth
    studentstream();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

export { socketApi, io };
