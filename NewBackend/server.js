

// const express = require("express");
// const app = express()
// const cors = require("cors")
// app.listen(9000, () => {
//     console.log("server starting at 9000")
// })

const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routers/Taskroutes");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/taskdb")
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log(error));

app.use("/api", taskRoutes);

app.listen(9000, () => {
  console.log("Server running on port 9000");
});



