import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  Employee_Name: {
    type: String,
  },
  Employee_Email: {
    type: String,
    default:null
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
  Location: {
    type: String,
    default:null
  },
  Password: {
    type: String,
    default: null,
  },
  Type: {
    type: String,
    default:"admin"
  },
  Image: {
    type: String,
  },
  Status: {
    type: String,
    default:"active",
  },
});
const Employees = mongoose.model("employees", EmployeeSchema);
export default Employees;
