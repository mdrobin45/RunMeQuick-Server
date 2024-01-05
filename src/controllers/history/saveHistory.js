const HistoryModel = require("../../schemas/historySchema");

const saveHistory = async (req, res) => {
   try {
      const bodyData = req.body;
      await HistoryModel(bodyData).save();
      res.status(201).json({ message: "History added" });
   } catch {
      res.status(500).json({ error: "Internal server error" });
   }
};

module.exports = saveHistory;
