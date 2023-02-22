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
  Coun_Country: {
    type: String,
    default: null,
  },
  Course: {
    type: String,
    default: null,
  },
  Counsellor: {
    type: String,
    default: null,
  },
  Coun_Date: {
    type: String,
    default: null,
  },
  Coun_Time: {
    type: String,
    default: null,
  },
  Payment_Id: {
    type: String,
    default: null,
  },
  Order_Id: {
    type: String,
    default: null,
  },
});

const UserReg = mongoose.model("UserReg", UserRegschema);
export default UserReg;
