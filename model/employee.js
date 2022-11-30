import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  Employee_Name: {
    type: String,
  },
  DOJ: {
    type: String,
  },
  Employee_Id: {
    type: String,
  },
  counselling_Country: {
    type: String,
  },
  Address: {
    type: String,
  },
  Attendance: {
    type: String,
  },
});
const Employees = mongoose.model("employees", EmployeeSchema);
export default Employees;
