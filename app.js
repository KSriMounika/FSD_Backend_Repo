import express from 'express'
import router from './Routers/StudentRoutes.js';
import cors from 'cors';

const app = express();
const port = 7010;

app.use(express.json());
app.use(cors());

app.use('/',router);
app.get('/users',(req,res)=>{
    console.log("hello this is backend");
    res.send("hello this is backend");;
})
app.listen(port,()=>{
    console.log(`server running at the port ${port}`);
})
export default app;