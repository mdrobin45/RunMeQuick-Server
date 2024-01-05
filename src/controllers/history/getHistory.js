const HistoryModel = require("../../schemas/historySchema");

const getHistory = async (req, res) => {
   try {
      const { email } = req.query;
      const history = await HistoryModel.find({ email });
      res.send(history);
      res.status(200);
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
   }
};

module.exports = getHistory;
