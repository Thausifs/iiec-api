import mongoose, { Schema } from "mongoose";

const adminSchema = new mongoose.Schema({
  
  email: {
    type: String,
    // required: true,
    }
 
});
const Admin = mongoose.model("sstudent", adminSchema);
export default Admin;
