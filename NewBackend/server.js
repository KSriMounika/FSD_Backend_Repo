

const express = require("express");
const app = express()

// app.listen(9000, () => {
//     console.log("server starting at 9000")
// })

const router  = require( './routers/Testingroutes.js');
app.use('/', router);
app.listen(9000, () => {
    console.log("responding...")
})


