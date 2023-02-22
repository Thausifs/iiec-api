import {
  UserReg,
  Admin,
  Enquiries,
  University,
  Employees,
  Students,
} from "../model";
// import bcrypt from "bcrypt";
import mongoose from "mongoose";
import path from "path";
import { CloudinaryUploadImg } from "../utils/cloudinary";
import fs from "fs";
import { sentmail } from "../utils/nodemailer";
// import UserReg from "../model/userreg";

class Admininfo {
  async Register(req, res) {
    const {
      First_Name,
      Last_Name,
      Email_id,
      Mobile_Number,
      Std_destination1,
      Std_destination2,
      Nearest_iiecofc,
      Counselling_mode,
      Education_fund_src,
      Study_level,
      Status,
      
    } = req.body;
    const user = await UserReg.findOne({ Email_id });
    if (user) {
      return res.status(400).send({
        message: "user email already registered",
      });
    } else {
      const Data = await UserReg.create({
        First_Name,
        Last_Name,
        Email_id,
        Mobile_Number,
        Std_destination1,
        Std_destination2,
        Nearest_iiecofc,
        Counselling_mode,
        Education_fund_src,
        Study_level,
        Status,
      });
      return res.status(200).send({
        message: "user registered sucessfully ",
      });
    }
  }

  async Enquiries(req, res) {
    const { Name, Phone_no, Email_id, Subject, Description } = req.body;
    try {
      const user = await Enquiries.findOne({ Email_id });
      if (user) {
        return res.status(400).send({
          message:
            "You have already submitted a enquiry , please wait our team will contact you",
        });
      }
      const Data = await Enquiries.create({
        Name,
        Phone_no,
        Email_id,
        Subject,
        Description,
      });

      return res.status(200).send({
        message: "Enquiry registered sucessfully ",
        Data: Data,
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  async viewalldata(req, res) {
    try {
      const data = await UserReg.find({});
      return res.status(200).send({
        Data: data,
        message: "user data fetched sucessfully ",
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
  async Createuniversity(req, res) {
    const { Name, Country, Territories } = req.body;
    try {
      const univ = await University.findOne({ Name: Name, Country: Country });
      if (univ) {
        return res.status(400).send({
          message: "University with same country and name is already stored. ",
        });
      } else {
      }
      const Data = await University.create({
        Name,
        Country,
        Territories,
      });
      return res.status(200).send({
        message: "University added successfully ",
        Data: Data,
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  async Viewuniversities(req, res) {
    try {
      const Data = await University.find();
      return res.status(200).send({
        Data: Data,
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
  async CreateEmployee(req, res) {
    const {
      Employee_Name,
      DOJ,
      Employee_Id,
      Counselling_Country,
      Address,
      Password,
    } = req.body;
    const image = req.file.path;
    const imgUploaded = await CloudinaryUploadImg(image);
    try {
      const Employee = await Employees.findOne({ Employee_Id: Employee_Id });
      if (Employee) {
        return res.status(503).json({
          message: "Employee already found with same employee id ",
        });
      } else {
        const Data = await Employees.create({
          Employee_Name,
          DOJ,
          Employee_Id,
          Counselling_Country,
          Address,
          Password,
          Type: "admin",
          Image: imgUploaded,
        });
        return res.status(201).json({
          message: "Employee created succesfully",
          Data: Data,
        });
      }
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
  async UpdateEmployee(req, res) {
    const {
      Employee_Name,
      DOJ,
      Employee_Id,
      counselling_Country,
      Address,
      Password,
    } = req.body;
    const Employee = await Employees.findOne({ Employee_Id });
    try {
      if (Employee) {
        Employee.Employee_Name = Employee_Name;
        Employee.DOJ = DOJ;
        Employee.counselling_Country = counselling_Country;
        Employee.Address = Address;
        Employee.Password = Password;
        await Employee.save();
        return res.status(200).send({
          message: "Employee Updated",
        });
      } else {
        return res.status(400).send({
          message: "Employee not found",
        });
      }
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  async CreateStudent(req, res) {
    const {
      Students_Name,
      DOE,
      Student_Id,
      Counselling_Country,
      Counsellor,
      Courses,
      Status,
    } = req.body;
    // console.log(req.body);

    const image = req.file.path;
    const imgUploaded = await CloudinaryUploadImg(image);

    try {
      if (imgUploaded.http_code === 401) {
        return res.status(401).json({
          message: "Error while uploading the images",
        });
      }
      const student = await Students.findOne({ Student_Id: Student_Id });
      if (student) {
        return res.status(503).json({
          message: "Student already found with same student id ",
        });
      } else {
        const Data = await Students.create({
          Students_Name,
          DOE,
          Student_Id,
          Counselling_Country,
          Counsellor,
          Courses,
          Status,
          Image: imgUploaded,
        });
        fs.unlinkSync(`${image}`);
        return res.status(200).send({
          message: "Student created succesfully",
          Data: Data,
        });
      }
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  async UpdateStudent(req, res) {
    const {
      Students_Name,
      DOE,
      Student_Id,
      Counselling_Country,
      Counsellor,
      Courses,
      Status,
    } = req.body;

    const Student = await Students.findOne({ Student_Id });
    try {
      if (Student) {
        Student.Students_Name = Students_Name;
        Student.DOE = DOE;
        Student.Counselling_Country = Counselling_Country;
        Student.Counsellor = Counsellor;
        Student.Courses = Courses;
        Student.Status = Status;
        await Student.save();
        return res.status(200).send({
          message: "Student Updated",
        });
      } else {
        return res.status(400).send({
          message: "Student not found",
        });
      }
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
  async viewallemployees(req, res) {
    try {
      const Data = await Employees.find();
      return res.status(200).send({
        message: "Employees data fetched",
        Data: Data,
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
  async viewallstudents(req, res) {
    try {
      const Data = await Students.find();
      return res.status(200).send({
        message: "Students data fetched",
        Data: Data,
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
  async DeleteStudent(req, res) {
    const { Student_Id } = req.body;

    try {
      const Student = await Students.findOne({ Student_Id: Student_Id });

      if (Student) {
        await Students.deleteOne({ Student_Id: Student_Id });
        return res.status(200).send({
          message: "Student deleted Sucessfully",
        });
      }
      return res.status(401).send({
        message: "Student not found",
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  async DeleteEmployee(req, res) {
    const { Employee_Id } = req.body;

    try {
      const Employee = await Employees.findOne({ Employee_Id: Employee_Id });

      if (Employee) {
        await Employees.deleteOne({ Employee_Id: Employee_Id });
        return res.status(200).send({
          message: "Employee deleted Sucessfully",
        });
      }
      return res.status(401).send({
        message: "Employee not found",
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
  async ViewallRegisterUsers(req, res) {
    try {
      const Data = await UserReg.find();
      return res.status(200).send({
        Data: Data,
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  async EmployeeLogin(req, res) {
    const { Employee_Id, Password } = req.body;

    try {
      const Employee = await Employees.findOne({ Employee_Id: Employee_Id });

      if (Employee) {
        if (Employee.Password === Password) {
          return res.status(200).send({
            message: "Employee login sucessful",
            Data: Employee.Type,
          });
        } else {
          return res.status(201).send({
            message: "Authentication failed , Password didn't match",
          });
        }
      } else {
        return res.status(401).send({
          message: "Employee not found",
        });
      }
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
  async ApplicationCompleted(req, res) {
    try {
      const Data = await Students.find({ Status: "Joining Date Finalised" });
      return res.status(200).send({
        Data: Data,
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  async AddimageStd(req, res) {
    // console.log(JSON.parse(req.body));

    const image = req.file.path;
    const { Student_Id } = req.body;

    try {
      const imgUploaded = await CloudinaryUploadImg(image);

      if (imgUploaded.http_code === 401) {
        return res.status(401).json({
          message: "Error while uploading the images",
        });
      }

      const Student = await Students.findOne({ Student_Id: Student_Id });

      if (Student) {
        Student.Image = imgUploaded;
        await Student.save();
      }
      fs.unlinkSync(`${image}`);
      return res.status(201).send({
        message: "Image updated",
        Data: imgUploaded,
      });
    } catch (error) {
      res.status(500).send("Data not Added");
    }
  }

  async AddimageEmp(req, res) {
    // console.log(JSON.parse(req.body));

    const image = req.file.path;
    const { Employee_Id } = req.body;

    try {
      const imgUploaded = await CloudinaryUploadImg(image);

      if (imgUploaded.http_code === 401) {
        return res.status(401).json({
          message: "Error while uploading the images",
        });
      }

      const Employee = await Employees.findOne({ Employee_Id: Employee_Id });

      if (Employee) {
        Employee.Image = imgUploaded;
        await Employee.save();
      }
      fs.unlinkSync(`${image}`);
      return res.status(201).send({
        message: "Image updated",
        Data: imgUploaded,
      });
    } catch (error) {
      res.status(500).send("Data not Added");
    }
  }
  async AddCounselling(req, res) {
    const { Coun_Country, Coun_Date, Coun_Time, Counsellor, Email_id } =
      req.body;
    const user = await UserReg.findOne({ Email_id });

    if (!user) {
      return res.status(400).send({
        message: "user not found ",
      });
    } else if (user) {
      user.Coun_Country = Coun_Country;
      user.Coun_Date = Coun_Date;
      user.Coun_Time = Coun_Time;
      user.Counsellor = Counsellor;
      user.Status = "Counselling Payment Pending";
      await user.save();

      const toaddress = Email_id;
      await sentmail(toaddress, Coun_Date, Coun_Time);
      return res.status(200).send({
        message: "user counselling scheduled sucessfully ",
      });
    } else {
      return res.status(404).send({
        message: "Error while schedulling counselling ",
      });
    }
  }
  async rzpayverification(req, res) {
    const secret = "1234578";

    try {
      console.log(req.body.payload.payment.entity);
      const Email_id = req.body.payload.payment.entity.email;
      const student = await UserReg.findOne({ Email_id });
      if (student) {
        console.log(student);
        if (req.body.payload.payment.entity.status == "captured") {
          student.Status = "Payment Completed";
          student.Payment_Id = JSON.stringify(
            req.body.payload.payment.entity.id
          );
          student.Order_Id = JSON.stringify(
            req.body.payload.payment.entity.order_id
          );
          await student.save();
          return res.json({ status: "ok", message: "payment Sucessful" });
        } else {
          return res.status(400).send({
            message: "Error while capturing payment data from razor pay .",
          });
        }
      } else {
        return res.status(400).send({
          message: "Student is not find with the mail id provided",
        });
      }
    } catch (error) {
      return res.json({
        status: "ok",
      });
    }
  }
}

export default new Admininfo();
