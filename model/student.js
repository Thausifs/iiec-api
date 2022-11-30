import mongoose from "mongoose";

const StudentsSchema = new mongoose.Schema({
  Students_Name: {
    type: String,
  },
  DOE: {
    type: String ,
  },
  Student_Id: {
    type: Number,
  },
  Counselling_Country: {
    type: String,
  },
  Counsellor: {
    type: String,
  },
  Status: {
    type: String,
  },
  Courses: {
    type: String,
  },
});
const Students = mongoose.model("Students", StudentsSchema);
export default Students;
