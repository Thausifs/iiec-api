import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Phone_no: {
    type: Number,
  },
  Email_id: {
    type: String,
  },
  Subject: {
    type: String,
  },
  Description: {
    type: String,
  }
  
});

const Enquiries = mongoose.model("enquiries",   EnquirySchema);
export default Enquiries;
