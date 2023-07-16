import express from "express";
const router = express.Router();
import multer from "multer";
import StudentInfo from "../controller/studentcontroller.js";

const Storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/images/");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    (file.mimetype === "image/jpg" && fileSize <= 524288)
  ) {
    cb(null, true);
  } else {
    cb(null, false);
    req.session.imgmessage =
      "Only JPEG OR PNG images and should be lesser than 2mb ";
  }
};
const upload = multer({
  storage: Storage,
  //   limits: {
  //     fileSize: 1024 * 1024 * 2, // 2mb upload
  //   },
  fileFilter: fileFilter,
});


router.post("/registerform", StudentInfo.RegisterForm);

export default router;