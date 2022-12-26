import multer from "multer";

// import path from 'path';
// import fs from 'fs';

// const file = 'uploads';

// if (!fs.existsSync(file)) {
//   fs.mkdirSync(file);
// }

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, path.join(__dirname, '../../uploads'));
//   },
//   filename(req, file, cb) {
//     cb(null, `${Date.now()}.${file.mimetype.split('/')[1]}`);
//   },
// });
const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype.split("/")[0] === "image") {
    cb(null, true);
  } else {
    cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
  }
};

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 2, // 2mb upload
  },
  fileFilter,
});

export { upload };
