import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
// import UserReg from "./model/user.js";
import adminroutes from "./routes/adminroutes.js";
import morgan from "morgan";
import http from "http";

connectDB();
const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use("/admin", adminroutes);

app.get("/", (req, res) => {
  res.json({ msg: "yes it's back-end" });
});
const server = http.createServer(app);
const port = process.env.PORT || 9000;
const host = process.env.HOST_URL || "http://localhost";
server.listen(port, () =>
  console.log(`🚀 Running on ${process.pid} @ ${host}:${port}`)
);
