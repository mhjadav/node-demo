import multer from 'multer';
import path from 'path';

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(".","/src/static/images"))
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
      callback(null, true)
    }
    else {
      return callback(new Error('Only jpeg and png files are allowed'))
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 }
}).single('image');

export default upload;