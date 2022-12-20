import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_SECRET_KEY,
});
const CloudinaryUploadImg = async (fileToUpload) => {
  // console.log(fileToUpload);
  try {
    const data = await cloudinary.uploader.upload(fileToUpload, {
      resource_type: "auto",
    });
    return {
      url: data.secure_url,
    };
  } catch (error) {
    return error;
  }
}


export default CloudinaryUploadImg;
