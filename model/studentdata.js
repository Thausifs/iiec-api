import mongoose from "mongoose";

const StudentsDataSchema = new mongoose.Schema({
  Students_Name: {
    type: String,
  },
  DOE: {
    type: String,
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
  Emp_Id: {
    type: String,
  },
  Status: {
    type: String,
  },
  Courses: {
    type: String,
  },
  DOJ: {
    type: String,
  },
  Image: {
    type: String,
  },
});
const StudentsDatas = mongoose.model("Studentdatas", StudentsDataSchema);
export default StudentDatas;
