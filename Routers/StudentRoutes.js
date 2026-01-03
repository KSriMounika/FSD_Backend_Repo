//importing the student controller
// import { getStudent,addStudent, updateStudent, deleteStudent } from "../Controllers/StudentController.js";
// import { getStudent,addStudent, getStudentById, getStudentDetails, updateStudent, deleteStudent, deleteStudentDetails } from "../Controllers/StudentController.js";
// import express from "express";
//creating the router
// const router = express.Router();
// router.get('/get-student',getStudent);
// router.get('/get-student-byId/:userid',getStudentById);

// router.get('/get-student-details',getStudentDetails);
// router.post('/add-student',addStudent);
// router.put('/update-student/:id',updateStudent);
// router.delete('/delete-student/:id',deleteStudent);
// router.delete('/deletestudent/',deleteStudentDetails);
// router.put('/edit-student',updateStudent);
// router.delete('/delete-student',deleteStudent);

// export default router;


import express from "express";
import {
  addStudent2,
  getStudents1,
  getStudentById1,
  deleteStudent1,
  updateStudent1,
  
} from "../Controllers/StudentController.js";

const router = express.Router();

router.post("/", addStudent2);
router.get("/", getStudents1);
router.get("/:id", getStudentById1);
router.put("/:id", updateStudent1)
router.delete("/:id", deleteStudent1);

export default router;


