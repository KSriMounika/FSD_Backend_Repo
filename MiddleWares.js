import express from 'express';
import bodyParser from 'body-parser';
const app = express();

// app.use(express.bodyParser())
app.use(express.json());


app.get('/', (req, res) => {
    console.log("This is from backend");
    res.send("Home");
})


app.get('/get-user', (req,res) => {

    res.send("api successful");
})

app.post('/add-user', (req, res) => {

    let data = req.body;
    console.log(data);
    res.send("Data added");
})


app.put('/edit-user', (req, res) => {

    let data = req.body;
    console.log(data);
    res.send("Data edited");
})

app.delete('/delete-user', (req, res) => {

    let data = req.body;
    console.log(data);
    res.send("Data deleted");
})

app.listen(7009, () => {

    console.log(`Server running at port ${7009}`);
    
})
