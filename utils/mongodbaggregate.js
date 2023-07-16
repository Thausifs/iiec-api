import { Employees, sstudent, Students } from "../model";

// export async function aggregate() {
//     const data = await Employees.aggregate([{ $match: { Employee_Id: "12345" } }]);
//     return data
// }

// export async function aggregate() {
//   const data = await Employees.aggregate([
//       { $match: { Employee_Id: "12345" } },
//       {$project:{Employee_Id: 1 , _id : 0}}
//   ]);
//   return data;
// }

// export async function aggregate() {
//   const data = await Employees.aggregate([
//     { $match: { Status: "active" } },
//     { $project: { Employee_Id: 1, Status: 1 } },
//   ]);
//   return data;
// }

// export async function aggregate() {
//   const data = await Employees.aggregate([
//     { $match: { Status: "inactive" } },
//     { $project: { Employee_Id: 1, Status: 1 , mark:"aabb"} },
//   ]);
//   return data;
// }
export async function aggregate() {
  const data = await sstudent.aggregate([
    // { $match: { Status: "inactive" } },
    {
      $lookup: {
        from: "studentmarks",
        localField: "_id",
        foreignField: "Student_Id",
        as: "studentmarksinfo",
      },
    },
   
  
  ]);
  return data;
}
