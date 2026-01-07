
// const TestingApi = async (req, res) => {
   
// }
// module.exports = TestingApi;


const records = [
  { id: 3, name: "Luckii" },
  { id: 4, name: "Mouni" }
];

// GET handler
function fetchAll(req, res) {
  try {
    res.status(200).json(records);
  } catch (err) {
    res.status(500).json({ error: "Unexpected error" });
  }
}

// POST handler
function insertOne(req, res) {
  try {
    const payload = req.body;
    if (!payload || !payload.id || !payload.name) {
      return res.status(400).json({ error: "Invalid input" });
    }
    records.push(payload);
    res.status(201).json({ message: "Inserted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Unexpected error" });
  }
}

// DELETE handler
function removeOne(req, res) {
  try {
    const targetId = Number(req.params.id);
    const idx = records.findIndex(r => r.id === targetId);

    if (idx === -1) {
      return res.status(404).json({ error: "Record not found" });
    }

    records.splice(idx, 1);
    res.json({ message: "Removed successfully" });
  } catch (err) {
    res.status(500).json({ error: "Unexpected error" });
  }
}

// UPDATE handler
function modifyOne(req, res) {
  try {
    const targetId = Number(req.params.id);
    const entry = records.find(r => r.id === targetId);

    if (!entry) {
      return res.status(404).json({ error: "Record not found" });
    }

    if (req.body.name) {
      entry.name = req.body.name;
    }

    res.json({ message: "Updated successfully", updated: entry });
  } catch (err) {
    res.status(500).json({ error: "Unexpected error" });
  }
}

module.exports = { fetchAll, insertOne, removeOne, modifyOne };