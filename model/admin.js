import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  userId: {
    type: Number,
    // required: true,
  },
  firstname: {
    type: String,
    // required: true,
  },
  lastname: {
    type: String,
    // required: true,
  },
  gender: {
    type: String,
    // required: true,
  },
  designation: {
    type: String,
    // required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  aadharno: {
    type: Number,
    // required: true,
  },
  preferredareas: {
    type: String,
    // required: true,
  },
  phoneno: {
    type: Number,
    // required: true,
  },
  otp: {
    type: Number,
  },

  password: {
    type: String,
  },
  status: {
    type: String,
  },
  target: {
    type: Number,
    default: 0,
  },
});
const Admin = mongoose.model("admin", adminSchema);
export default Admin;
