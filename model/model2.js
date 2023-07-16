import mongoose, { Schema } from "mongoose";

const adminSchema = new mongoose.Schema({
  Student_Id: {
    type: Schema.Types.ObjectId,
    ref: "sstudents",
  },
  Subject: {
    type: String,
  },
  Marks: {
    type: String,
  },
});
const Admin = mongoose.model("studentmarks", adminSchema);
export default Admin;
