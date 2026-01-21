

// const express = require("express");
// const app = express()
// const cors = require("cors")
// app.listen(9000, () => {
//     console.log("server starting at 9000")
// })

// const express = require("express");
// const mongoose = require("mongoose");
// const taskRoutes = require("./routers/Taskroutes");
// const cors = require("cors");
// const path = require("path");

// const app = express();

// app.use(cors({
//   origin: "http://localhost:5173"
// }));

// app.use(express.json());

// app.use(express.static(path.join(__dirname,"uploads")))
// mongoose.connect("mongodb://localhost:27017/taskdb")
//   .then(() => console.log("DB Connected"))
//   .catch((error) => console.log(error));

//   app.get("/", (req, res) => {
//   res.send("Backend is running 🚀");
// });

// app.use("/api", taskRoutes);

// app.listen(9000, () => {
//   console.log("Server running on port 9000");
// });



const express = require("express");
const mongoose = require("mongoose");
const fileRoutes = require("./routes/fileroutes");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose.connect("mongodb://localhost:27017/taskdb")
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("Backend is running ");
});

app.use("/api", fileRoutes);

app.listen(9000, () => {
  console.log("Server running on port 9000");
});



// const express = require('express')

// const mongoose = require("mongoose");
// const mailRoutes = require('./routers/mailRoutes') 
//  mongoose.connect("mongodb://localhost:27017/taskdb")
//   .then(() => console.log("DB Connected"))
 
// const app = express()
// app.use(express.json())

// app.use('/api/mail', mailRoutes)

// const PORT = process.env.PORT || 9000
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })



// const express = require("express")
// const cookieParser = require("cookie-parser")
// const cors = require("cors")

// const authRoutes = require("./routes/auth.routes")

// const app = express()
// const mongoose = require("mongoose");
//  mongoose.connect("mongodb://localhost:27017/taskdb")
//   .then(() => console.log("DB Connected"))
 
// app.use(express.json())
// app.use(cookieParser())

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true
//   })
// )

// app.use("/api", authRoutes)

// app.listen(5000, () => {
//   console.log("Server running on port 5000")
// })
