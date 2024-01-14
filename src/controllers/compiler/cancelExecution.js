const { executionProcess } = require("./compiler");

const cancelExecution = async (req, res) => {
   try {
      console.log(executionProcess);
      res.status(200).json({ message: "Execution cancelled" });
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
   }
};

module.exports = cancelExecution;
