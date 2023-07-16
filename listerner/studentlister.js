import { io } from ".";
import { UserReg } from "../model";

async function sockerreload(emitname, message) {
  try {
    return io.of("/socket/connection").emit(emitname, message);
  } catch (error) {
    console.log(error.message);
  }
}

export async function studentstream() {
  UserReg.watch().on("change", async (change) => {
    if (change.operationType === "insert") {
      // console.log("insert", change.fullDocument);
    } else if (change.operationType === "update") {
      //  console.log("update", change.updateDescription);
      await sockerreload("studentstatus", "reload");
    }
  });
}
