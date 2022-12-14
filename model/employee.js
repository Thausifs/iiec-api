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
  Counselling_Country: {
    type: String,
  },
  Address: {
    type: String,
  },
  Password: {
    type: String,
  },
  Type: {
    type: String,
  },
  Image: {
    type: String,
  },
});
const Employees = mongoose.model("employees", EmployeeSchema);
export default Employees;
