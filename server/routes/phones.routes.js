const Phone = require("../models/Phone.model");
const phones = require("../phones.json");
const router = require('express').Router();

router.get("/", async (req, res) => {
    try {
      const phones = await Phone.find()
      res.status(200).json(phones)
    }
    catch (error) {
      res.status(500).json({ error, message: "Failed to get phones." })
    }
  })

router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const onePhone = await Phone.findById(id);
      if (!onePhone) {
        return res.status(404).json({ error, message: "Phone not found." })
      }
      res.status(200).json(onePhone);
    }
    catch (error) {
      console.error("Error:", error); 
      res.status(500).json({ error, message: "Failed to get the phone information." })
    }
  })


module.exports = router;