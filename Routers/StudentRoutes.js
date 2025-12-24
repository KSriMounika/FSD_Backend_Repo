//importing the student controller
// import { getStudent,addStudent, updateStudent, deleteStudent } from "../Controllers/StudentController.js";
import { getStudent,addStudent } from "../Controllers/StudentController.js";
import express from "express";
//creating the router
const router = express.Router();
router.get('/get-student',getStudent);
router.post('/add-student',addStudent);
// router.put('/edit-student',updateStudent);
// router.delete('/delete-student',deleteStudent);

export default router;


