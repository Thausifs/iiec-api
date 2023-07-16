import mongoose from "mongoose";
import path from "path";
import { CloudinaryUploadImg } from "../utils/cloudinary";
import fs from "fs";


class StudentInfo {
    async RegisterForm(req, res) {
        const { Email } = req.body;
        try {
            const result = await sstudent.create({
                email: Email,
            });
            return res.status(200).send({
                message: "",
                response: result,
            });
        } catch (error) {
            return res.status(400).send({
                message: "error",
            });
        }

    }

}
 export default new StudentInfo();