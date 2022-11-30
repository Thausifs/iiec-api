import mongoose from "mongoose";

const UserRegschema = new mongoose.Schema({
  First_Name: {
    type: String,
  },
  Last_Name: {
    type: String,
  },
  Email_id: {
    type: String,
  },
  Mobile_Number: {
    type: String,
  },
  Std_destination1: {
    type: String,
  },
  Std_destination2: {
    type: String,
  },
  Std_destination2: {
    type: String,
  },
  Nearest_iiecofc: {
    type: String,
  },
  Counselling_mode: {
    type: String,
  },
  Education_fund_src: {
    type: String,
  },
  Study_level: {
    type: String,
  },
  Status: {
    type: String,
    default: "In-process",
  },
});

const UserReg = mongoose.model("UserReg", UserRegschema);
export default UserReg;
