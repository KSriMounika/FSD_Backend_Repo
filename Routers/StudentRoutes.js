//importing the student controller
// import { getStudent,addStudent, updateStudent, deleteStudent } from "../Controllers/StudentController.js";
import { getStudent,addStudent, getStudentById, getStudentDetails, updateStudent, deleteStudent, deleteStudentDetails } from "../Controllers/StudentController.js";
import express from "express";
//creating the router
const router = express.Router();
router.get('/get-student',getStudent);
router.get('/get-student-byId/:userid',getStudentById);

router.get('/get-student-details',getStudentDetails);
router.post('/add-student',addStudent);
router.put('/update-student/:id',updateStudent);
router.delete('/delete-student/:id',deleteStudent);
router.delete('/deletestudent/',deleteStudentDetails);
// router.put('/edit-student',updateStudent);
// router.delete('/delete-student',deleteStudent);

export default router;


