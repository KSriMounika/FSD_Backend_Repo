// const getStudent = (req,res)=>{
//     //data which is getting from database
//     let data = {name:"Mounika",roll:"35"};
//     //sending the response with status code
//     res.status(200).json({data:data});
// }
// const addStudent = (req,res)=>{
//     const student = req.body;
//     console.log(student);
//     res.status(201).json({message:"successfully added student"});
// }
// const updateStudent = (req,res)=>{
//     const student = req.body;
//     console.log(student);
//     res.status(200).json({message:"successfully updated student"});
// }

// const deleteStudent = (req,res)=>{
//     const student = req.body;
//     console.log(student);
//     res.status(200).json({message:"successfully deleted student"});
// }

// export{getStudent,addStudent, updateStudent, deleteStudent};

import student from "../Models/studentModels.js";

const getStudent = async(req, res) => {
    try{
            // const mydata = await student.find();
            // const mydata = await student.findOne();
            const mydata = await student.findById({_id: "694bb7d758975e5c4eadb13d"})
            res.status(200).json(mydata);
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message})
    }

};
const addStudent = async(req, res) => {
    try{
         const data = req.body;
    console.log(data);
    const addeddata = await student.create(data);
    // const addeddata = await student.insertMany(data);
    console.log(addeddata);
    res.status(201).json("data added");
    }catch(error){
        res.status(500).json({error: error.message})
    }
};
export {getStudent, addStudent};