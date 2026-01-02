import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    stdName: {
        type: String,
        required: true
    },
    stdRoll : {
        type: String,
        required: true
    },
    stdEmail :
    {
        type: String

    },
    stdCollege:
    {
        type: String
    },
    stdBranch :
    {
        type: String
    }

    // stdPhone: {
    //     type : Number
    // },
    // status:
    // {
    //     type: Boolean,
    //     default: false
    // }
});
const student = mongoose.model("student", studentSchema);
export default student;