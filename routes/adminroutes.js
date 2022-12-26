import express from "express";
const router = express.Router();
import multer from "multer";
// import { upload } from "../middleware/multer";
import Admininfo from "../controller/usercontroller.js";

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

router.post("/register", Admininfo.Register);
router.get("/viewall", Admininfo.viewalldata);
router.post("/enquiries", Admininfo.Enquiries);
router.post("/createuniversity", Admininfo.Createuniversity);
router.get("/viewuniversities", Admininfo.Viewuniversities);
router.post(
  "/createEmployee",
  upload.single("Image"),
  Admininfo.CreateEmployee
);
router.post("/updateEmployee", Admininfo.UpdateEmployee);
router.post("/createStudent", upload.single("Image"), Admininfo.CreateStudent);
router.post("/updateStudent", Admininfo.UpdateStudent);
// router.post("/updateStudentimg", Admininfo.Updateimagestd);
router.get("/viewallemployees", Admininfo.viewallemployees);
router.get("/viewallstudents", Admininfo.viewallstudents);
router.post("/deletestudent", Admininfo.DeleteStudent);
router.post("/deleteemployee", Admininfo.DeleteEmployee);
router.get("/viewallreguser", Admininfo.ViewallRegisterUsers);
router.post("/employeelogin", Admininfo.EmployeeLogin);
router.get("/aplcompleted", Admininfo.ApplicationCompleted);
router.post("/addimagestd", upload.single("Image"), Admininfo.AddimageStd);
router.post("/addimageemp", upload.single("Image"), Admininfo.AddimageEmp);
// router.post("/addimage", upload.single("image"));

// router.post("/uploadImages", Admininfo.uploadImages);

export default router;
