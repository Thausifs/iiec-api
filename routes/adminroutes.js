import express from "express";
import multer from "multer";
const router = express.Router();

import Admininfo from "../controller/usercontroller.js";

// const Storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, "./public/images/");
//   },
//   filename: function (req, file, callback) {
//     callback(null, Date.now() + file.originalname);
//   },
// });
// const fileFilter = (req, file, cb) => {
//   // reject a file
//   if (
//     file.mimetype === "image/jpeg" ||
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/jpg"
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//     req.session.imgmessage = "Only JPEG OR PNG images";
//   }
// };
// const upload = multer({
//   storage: Storage,
//   fileFilter: fileFilter,
// });

router.post("/register", Admininfo.Register);
router.get("/viewall", Admininfo.viewalldata);
router.post("/enquiries", Admininfo.Enquiries);
router.post("/createuniversity", Admininfo.Createuniversity);
router.get("/viewuniversities", Admininfo.Viewuniversities);
router.post("/createEmployee", Admininfo.CreateEmployee);
router.post("/updateEmployee", Admininfo.UpdateEmployee);
router.post("/createStudent", Admininfo.CreateStudent);
router.post("/updateStudent", Admininfo.UpdateStudent);
router.get("/viewallemployees", Admininfo.viewallemployees);
router.get("/viewallstudents", Admininfo.viewallstudents);
router.post("/deletestudent", Admininfo.DeleteStudent);
router.post("/deleteemployee", Admininfo.DeleteEmployee);
router.get("/viewallreguser", Admininfo.ViewallRegisterUsers);
router.post("/employeelogin", Admininfo.EmployeeLogin);
router.get("/aplcompleted", Admininfo.ApplicationCompleted);
// router.post("/addimage", upload.single("image"), Admininfo.Addimage);
router.post("/addimage",  Admininfo.Addimage);

// router.post("/uploadImages", Admininfo.uploadImages);

 


export default router;
