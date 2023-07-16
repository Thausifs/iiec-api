const express = require("express");

const http = require("http");
const moment = require ("moment-timezone");
const io = require ( "socket.io-client");


const socket = io("http://localhost:5000/socket/connection");

socket.on("studentstatus", (data) => {
  console.log(`locker ${moment().tz("Asia/Kolkata").format("HH:mm")}`, data);
});

console.log("listening on http://localhost:3000");
