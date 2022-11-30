import express from "express";
const router = express.Router();

import Admininfo from "../controller/usercontroller.js";


router.post("/userdata", Admininfo.Registeruser);
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
 


// router.get("/viewall", Admininfo.viewalldata);
// router.post("/deleteuser", Admininfo.deleteuser);
// router.post("/updateuser", Admininfo.updateUser);
// router.post("/create", Admininfo.Createadmin);
// router.post("/adminlogin", Admininfo.adminlogin);
// router.post("/settarget", Admininfo.settarget);
// router.post("/approveadmin", Admininfo.approveadmin);
// router.get("/gettabledata", Admininfo.gettabledata);
// router.get("/top3data", Admininfo.top3data);

export default router;
