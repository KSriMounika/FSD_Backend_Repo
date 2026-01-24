const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

router.get("/students-lookup", async (req, res) => {
  try {
    const data = await Student.aggregate([
      {
        $lookup: {
          from: "students",     
          localField: "hoot_id",
          foreignField: "hoot_id",
          as: "result"
        }
      }
    ]);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
