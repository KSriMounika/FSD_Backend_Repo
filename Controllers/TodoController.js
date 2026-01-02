app.use(express.urlencoded());

const addStudent = async(req, res) => {
    try{
    let mydata = new FormData()
    mydata.append("Name: ", value, require = "true");
    mydata.append("Rollno: ", value, require = "true");
    mydata.append("Branch: ", value);
    mydata.append("Campus: ", value);
    mydata.append("Graduation Year: ", value);
    const data = req.body;
    
    const addeddata = await student.create(mydata);
    // const addeddata = await student.insertMany(data);
    console.log(addeddata);
    res.status(201).json("data added");
    }catch(error){
        res.status(500).json({error: error.message})
    }
};
