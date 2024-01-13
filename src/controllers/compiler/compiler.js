const fs = require("fs");
const { spawn } = require("child_process");
const getCompileCommand = require("../../utils/compile");

const codeCompiler = async (req, res) => {
   try {
      const { code, language } = req.body;

      if (!code || !language) {
         return res
            .status(400)
            .json({ error: "Code and language is required" });
      }

      const filename = `code.${language.toLowerCase()}`;

      const compileCommand = getCompileCommand(language);

      if (!compileCommand) {
         return res.status(400).json({ error: "Unsupported language" });
      }

      // Temporary file with code
      fs.writeFileSync(filename, code);

      let outputData = "";
      let errorData = "";

      // Execute code
      const process = spawn(compileCommand, [filename]);

      // Normal output
      process.stdout.on("data", (chunk) => {
         const readableChunk = chunk.toString("utf8");
         outputData += readableChunk;
      });

      // Error output
      process.stderr.on("data", (chunk) => {
         const readableChunk = chunk.toString("utf8");
         errorData += readableChunk;
      });

      process.on("exit", () => {
         if (errorData) {
            res.status(200).json({ stderr: btoa(errorData) });
         } else {
            res.status(200).json({ stdout: btoa(outputData) });
         }
      });

      process.on("error", (error) => {
         console.log(error);
         res.status(500).json({ error: "Internal server error" });
      });
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
   }
};

module.exports = codeCompiler;
