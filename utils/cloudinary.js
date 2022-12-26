import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_SECRET_KEY,
});
const CloudinaryUploadImg = async (image) => {
  try {
    // console.log(image);
    const data = await cloudinary.uploader.upload(image, {
      resource_type: "auto",
    });
    // console.log(data);
    return data.secure_url;
  } catch (error) {
    return error;
  }
};

export { CloudinaryUploadImg };
