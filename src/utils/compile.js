const getCompileCommand = (language) => {
   switch (language.toLowerCase()) {
      case "python":
         return { command: "python", ext: "py" };
      case "javascript":
         return { command: "node", ext: "javascript" };
      case "go":
         return { command: "go", exeCommand: "run", ext: "go" };
      case "ruby":
         return { command: "ruby", ext: "rb" };
      default:
         return null;
   }
};

module.exports = getCompileCommand;
