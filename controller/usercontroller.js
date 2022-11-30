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
// import UserReg from "../model/userreg";

class Admininfo {
  async Registeruser(req, res) {
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
      return res.status(200).send({
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
      //  console.log(error);
      return res.status(400).send(error.message);
    }
  }

  async viewalldata(req, res) {
    const data = await UserReg.find({});
    return res.status(200).send({
      message: "user registered sucessfully ",
    });
  }
  async Createuniversity(req, res) {
    const { Name, Country, Territories } = req.body;
    try {
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
      counselling_Country,
      Address,
      Attendance,
    } = req.body;
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
          counselling_Country,
          Address,
          Attendance,
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
      Attendance,
    } = req.body;
    const Employee = await Employees.findOne({ Employee_Id });
    try {
      if (Employee) {
        Employee.Employee_Name = Employee_Name;
        Employee.DOJ = DOJ;
        Employee.counselling_Country = counselling_Country;
        Employee.Address = Address;
        Employee.Attendance = Attendance;
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
    try {
      const Data = await Students.create({
        Students_Name,
        DOE,
        Student_Id,
        Counselling_Country,
        Counsellor,
        Courses,
        Status,
      });
      return res.status(200).send({
        message: "Student created succesfully",
        Data: Data,
      });
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
      console.log(Student);
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
      console.log(Employee);
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

  // async registerUser(req, res) {
  //   const { firstname, phoneno, passwd } = req.body;

  //   const salt = await bcrypt.genSalt(10);
  //   const password = await bcrypt.hash(passwd, salt);

  //   if (typeof phoneno === "string") {
  //     return res.status(400).send("phone no is string");
  //   } else {
  //     const Data = await User.create({
  //       firstname,
  //       phoneno,
  //       password,
  //     });

  //     return res.status(200).send({
  //       message: "user data successfully submit",
  //       user: Data,
  //     });
  //   }
  // }
  // async viewalldata(req, res) {
  //   try {
  //     const Data = await User.find();
  //     if (Data.length === 0) {
  //       return res.status(200).send({
  //         message: "no data found",
  //         status: false,
  //       });
  //     }

  //     return res.status(200).send({
  //       message: "successfully retrived data",
  //       status: true,
  //       user: Data,
  //     });
  //   } catch (error) {
  //     return res.status(400).send(error.message);
  //   }
  // }
  // async deleteuser(req, res) {
  //   const { firstname } = req.body;
  //   const user = await User.findOne({ firstname });
  //   try {
  //     if (user) {
  //       await User.deleteOne({ firstname });
  //       return res.status(200).send({
  //         message: "User deleted",
  //       });
  //     } else {
  //       return res.status(400).send({
  //         message: "User not found",
  //       });
  //     }
  //   } catch (error) {
  //     return res.status(400).send(error.message);
  //   }
  // }

  // async updateUser(req, res) {
  //   const { firstname, password, phoneno } = req.body;
  //   const user = await User.findOne({ firstname });
  //   try {
  //     if (user) {
  //       user.firstname = firstname;
  //       user.password = password;
  //       user.phoneno = phoneno;
  //       await user.save();
  //       return res.status(200).send({
  //         message: "User Updated",
  //       });
  //     } else {
  //       return res.status(400).send({
  //         message: "User not found",
  //       });
  //     }
  //   } catch (error) {
  //     return res.status(400).send(error.message);
  //   }
  // }

  // async Createadmin(req, res) {
  //   const {
  //     firstname,
  //     lastname,
  //     gender,
  //     address,
  //     email,
  //     phoneno,
  //     designation,
  //     aadharno,
  //     preferredareas,
  //     password,
  //     status,
  //     target,
  //   } = req.body;
  //   const admin = await Admin.findOne({ email }).select("-password");
  //   console.log(admin);
  //   var length = 10;
  //   var timestamp = +new Date();

  //   const _getRandomInt = function (min, max) {
  //     return Math.floor(Math.random() * (max - min + 1)) + min;
  //   };

  //   const generate = function () {
  //     var ts = timestamp.toString();
  //     var parts = ts.split("").reverse();
  //     var id = "";

  //     for (var i = 0; i < length; ++i) {
  //       var index = _getRandomInt(0, parts.length - 1);
  //       id += parts[index];
  //     }

  //     return id;
  //   };

  //   const userId = generate();
  //   // console.log(userId);

  //   // console.log(admin);
  //   try {
  //     if (admin) {
  //       return res.status(200).send({
  //         message: "Admin already found",
  //         Admin: admin,
  //       });
  //     } else {
  //       const Data = await Admin.create({
  //         userId,
  //         firstname,
  //         lastname,
  //         gender,
  //         address,
  //         email,
  //         phoneno,
  //         designation,
  //         aadharno,
  //         preferredareas,
  //         password,
  //         status,
  //         target,
  //       });
  //       console.log(Data);
  //       return res.status(200).send({
  //         message: "Admin created sucessfully",
  //         Admin: Data,
  //       });
  //     }
  //   } catch (error) {
  //     return res.status(400).send(error.message);
  //   }
  // }

  // async adminlogin(req, res) {
  //   const { email, password } = req.body;
  //   const admin = await Admin.findOne({ email });
  //   // console.log(admin);
  //   try {
  //     if (admin) {
  //       if (admin.password === password) {
  //         return res.status(200).send({
  //           message: "Authentication successful",
  //           userid: admin.userId,
  //           designation: admin.designation,
  //         });
  //       } else {
  //         return res.status(200).send({
  //           message: "password incorrect",
  //         });
  //       }
  //     } else {
  //       return res.status(400).send({
  //         message: "Admin not registered",
  //       });
  //     }
  //   } catch (error) {
  //     return res.status(400).send(error.message);
  //   }
  // }

  // async settarget(req, res) {
  //   const { email, Target } = req.body;

  //   try {
  //     const admin = await Admin.findOne({ email });

  //     console.log(admin);
  //     if (!admin) {
  //       return res.status(400).send({
  //         message: "Admin not found ",
  //       });
  //     } else {
  //       admin.target = Target;
  //       await admin.save();
  //       return res.status(200).send({
  //         message: "Admin target set ",
  //       });
  //     }
  //   } catch (error) {
  //     return res.status(400).send(error.message);
  //   }
  // }
  // async approveadmin(req, res) {
  //   const { email, status } = req.body;

  //   try {
  //     const admin = await Admin.findOne({ email });

  //     if (!admin) {
  //       return res.status(400).send({
  //         message: "Admin not found ",
  //       });
  //     } else {
  //       admin.status = status;
  //       await admin.save();
  //       return res.status(200).send({
  //         message: "Admin status set ",
  //       });
  //     }
  //   } catch (error) {
  //     return res.status(400).send(error.message);
  //   }
  // }

  // async gettabledata(req, res) {
  //   try {
  //     const admindata = await Admin.find({});

  //     if (!admindata) {
  //       return res.status(400).send({
  //         message: "data not found ",
  //       });
  //     } else {
  //       return res.status(200).send({
  //         message: "Data fetched sucessfully",
  //         Data: admindata,
  //       });
  //     }
  //   } catch (error) {
  //     return res.status(400).send(error.message);
  //   }
  // }
  // // async top3data(req, res) {
  // //   try {
  // //     const admindata = await Admin.find({});
  // //     const top3statemanager = await Admin.find({ designation: "CEO" });
  // //     const sortNullishValues = (arr = []) => {
  // //       const assignValue = (target) => {
  // //         if (target === null || target === undefined ) {
  // //           return Infinity;
  // //         } else {
  // //           return target;
  // //         }
  // //       };
  // //       const sorter = (a, b) => {
  // //         return assignValue(b.target) - assignValue(a.target);
  // //       };
  // //       arr.sort(sorter);
  // //       console.log(arr);

  // //       var newarr = arr.filter(function (obj) {
  // //         return obj.target !== null
  // //       })
  // //       console.log(newarr);
  // //     };

  // //     sortNullishValues(top3statemanager);
  // //     // console.log(sortNullishValues);
  // //     //  console.log(top3statemanager.target)
  // //     // const top3stmg = top3statemanager.sort((a, b) => b.target - a.target);
  // //     // console.log(top3stmg);
  // //     if (!admindata) {
  // //       return res.status(400).send({
  // //         message: "data not found ",
  // //       });
  // //     } else {
  // //       return res.status(200).send({
  // //         message: "Data fetched sucessfully",
  // //         // Data: sortNullishValues,
  // //       });
  // //     }
  // //   } catch (error) {
  // //     return res.status(400).send(error.message);
  // //   }
  // // }

  // async top3data(req, res) {
  //   let [ceo, statemanager, franchies, executivor, advertiser, subscription] = [
  //     [],
  //     [],
  //     [],
  //     [],
  //     [],
  //     [],
  //   ];
  //   let [
  //     ceorank,
  //     statemanagerrank,
  //     franchiesrank,
  //     executivorrank,
  //     advertiserrank,
  //     subscriptionrank,
  //   ] = [[], [], [], [], [], []];

  //   try {
  //     const top3data = await Admin.find();
  //     // console.log(top3data);
  //     // const result = top3data.filter(
  //     //   (data) => data.target !== null && data.target !== undefined
  //     // );
  //     if (top3data.length <= 0) {
  //       return res.status(200).send({
  //         msg: "top3 data not found",
  //       });
  //     }
  //     for (let index = 0; index < top3data.length; index++) {
  //       const element = top3data[index];
  //       const { designation, target } = element;
  //       if (designation === "CEO") {
  //         if (target !== 0 && target !== null) {
  //           ceo.push(element);
  //         }
  //       } else if (designation === "STATEMANAGER") {
  //         if (target !== 0 && target !== null) {
  //           statemanager.push(element);
  //         }
  //       } else if (designation === "FRANCHIES") {
  //         if (target !== 0 && target !== null) {
  //           franchies.push(element);
  //         }
  //       } else if (designation === "EXECUTIVOR") {
  //         if (target !== 0 && target !== null) {
  //           executivor.push(element);
  //         }
  //       } else if (designation === "ADVERTISER") {
  //         if (target !== 0 && target !== null) {
  //           advertiser.push(element);
  //         }
  //       } else if (designation === "SUBSCRIPTION") {
  //         if (target !== 0 && target !== null) {
  //           subscription.push(element);
  //         }
  //       }
  //     }
  //     // console.log(ceo);
  //     ceo.sort((a, b) => parseFloat(b.target) - parseFloat(a.target));
  //     statemanager.sort((a, b) => parseFloat(b.target) - parseFloat(a.target));
  //     franchies.sort((a, b) => parseFloat(b.target) - parseFloat(a.target));
  //     executivor.sort((a, b) => parseFloat(b.target) - parseFloat(a.target));
  //     advertiser.sort((a, b) => parseFloat(b.target) - parseFloat(a.target));
  //     subscription.sort((a, b) => parseFloat(b.target) - parseFloat(a.target));
  //     // console.log(result);
  //     //console.log(data);
  //     // rank list data

  //     const data = {
  //       ceo,
  //       statemanager,
  //       franchies,
  //       executivor,
  //       advertiser,
  //       subscription,
  //     };
  //     return res.status(200).send({
  //       message: "data  found ",
  //       data: data,
  //     });
  //   } catch (error) {
  //     return res.status(400).send(error.message);
  //   }
  // }
}

export default new Admininfo();
