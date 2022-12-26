import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
// import UserReg from "./model/user.js";
import adminroutes from "./routes/adminroutes.js";
import morgan from "morgan";
import http from "http";
import multer from "multer";

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

app.use((req, res, next) => {
  if (req.originalUrl && req.originalUrl.split("/").pop() === "favicon.ico") {
    return res.sendStatus(204);
  }

  next();
});

// app.use((error, req, res, next) => {
//   // multerfunction
//   if (error instanceof multer.MulterError) {
//     if (error.code === "LIMIT_FILE_SIZE") {
//       return res.status(404).json({
//         res,
//         data: {
//           message: "File is large, upload 2MB below",
//         },
//       });
//     }
//   }
//   if (error.code === "LIMIT_UNEXPECTED_FILE") {
//     return res.status(404).json({
//       message: "File must be an image JPEG and PNG",
//     });
//   }
// });
const server = http.createServer(app);
const port = process.env.PORT || 9000;
const host = process.env.HOST_URL || "http://localhost";
server.listen(port, () =>
  console.log(`🚀 Running on ${process.pid} @ ${host}:${port}`)
);
