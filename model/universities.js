import mongoose from "mongoose";

const UniversitySchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Country: {
    type: String,
  },
  Territories: {
    type: String,
  },
});
const University = mongoose.model("universities", UniversitySchema);
export default University;
