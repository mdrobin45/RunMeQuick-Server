const mongoose = require("mongoose");

const historySchema = mongoose.Schema({
   email: { type: String, required: true },
   sourceCode: { type: String, required: true },
   output: { type: String, required: true },
});

const HistoryModel = mongoose.model("history", historySchema);

module.exports = HistoryModel;
