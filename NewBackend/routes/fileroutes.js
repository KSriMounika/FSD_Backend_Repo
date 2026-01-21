
// const multer = require('multer')
// const path = require('path')

// const Storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,"uploads")
//     },
//     filename:function(req,file,cb){
//         cb(null,file.originalname)
//     }
// })

// const FileFilters = (req,file,cb) =>{
//     const AllowedTypes = /png|jpg|jpeg|svg/
//     const extension = path.extname(file.originalname).toLowerCase()
//     if(AllowedTypes.test(extension)){
//         cb(null,true)
//     }
//     else{
//         cb(new Error("Not Valid Formate"))
//     }
// }

// const Upload = multer({
//     storage:Storage,
//     fileFilter : FileFilters,
//     limits:{
//         fileSize:1024*1024*2
//     }
// })

// route.post("/file-upload",Upload.array('file',3),FileController.UploadFile)


const express = require("express");
const route = express.Router();

const multer = require("multer");
const path = require("path");
const FileController = require("../controllers/FileController");

// multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// file filter
const fileFilter = (req, file, cb) => {
  const allowed = /png|jpg|jpeg|svg/;
  const ext = path.extname(file.originalname).toLowerCase();

  if (allowed.test(ext)) cb(null, true);
  else cb(new Error("Invalid file format"));
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1024 * 1024 * 2 },
});

// ✅ ROUTE
route.post(
  "/file-upload",
  upload.array("file", 3),
  FileController.UploadFile
);

// ✅ EXPORT (MANDATORY)
module.exports = route;
