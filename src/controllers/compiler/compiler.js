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

      const languageInfo = getCompileCommand(language);
      if (!languageInfo) {
         return res.status(400).json({ error: "Unsupported language" });
      }

      const filename = `code.${languageInfo.ext}`;

      // Temporary file with code
      fs.writeFileSync(filename, code);

      let outputData = "";
      let errorData = "";

      // Execute code
      const process =
         language === "go"
            ? spawn(languageInfo.command, [languageInfo.exeCommand, filename])
            : spawn(languageInfo.command, [filename]);

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
            res.status(201).json({ stderr: btoa(errorData) });
         } else {
            res.status(201).json({ stdout: btoa(outputData) });
         }
      });

      process.on("error", (error) => {
         if (error.code === "ENOENT") {
            return res.status(404).json({ error: "An error occurred" });
         }
         res.status(500).json({ error: "Internal server error" });
      });
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
   }
};

module.exports = codeCompiler;
