const HistoryModel = require("../../schemas/historySchema");

const saveHistory = async (req, res) => {
   try {
      const { email, sourceCode, output } = req.body;
      await HistoryModel({ email, sourceCode, output }).save();
      res.status(201).json({ message: "History added" });
   } catch {
      res.status(500).json({ error: "Internal server error" });
   }
};

module.exports = saveHistory;
