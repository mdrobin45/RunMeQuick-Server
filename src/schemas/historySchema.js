const mongoose = require("mongoose");

const historySchema = mongoose.Schema({
   label: { type: String, required: true },
   value: { type: String, required: true },
   email: { type: String, required: true },
   sourceCode: { type: String, required: true },
   output: { type: Object, required: true },
});

const HistoryModel = mongoose.model("history", historySchema);

module.exports = HistoryModel;
