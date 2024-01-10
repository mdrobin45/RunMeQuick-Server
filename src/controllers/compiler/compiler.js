const fs = require("fs");
const { exec } = require("child_process");
const getCompileCommand = require("../../utils/compile");

const codeCompiler = async (req, res) => {
   try {
      const { code, language } = req.body;

      if (!code || !language) {
         return res
            .status(400)
            .json({ error: "Code and language is required" });
      }

      // const filename = `code.${language.toLowerCase()}`;

      const compileCommand = getCompileCommand(language);

      if (!compileCommand) {
         return res.status(400).json({ error: "Unsupported language" });
      }

      // Temporary file with code
      // fs.writeFileSync(filename, code);

      // Execute code
      exec(compileCommand, { code }, (error, stdout, stderr) => {
         // Delete temporary tile
         // fs.unlinkSync(filename);
         console.log(20);
         if (error) {
            return res.status(500).json({ error: stderr });
         }

         res.status(200).json({ response: stdout });
      });
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
   }
};

module.exports = codeCompiler;
