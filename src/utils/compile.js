const getCompileCommand = (language) => {
   switch (language.toLowerCase()) {
      case "python":
         return "python";
      case "javascript":
         return "node";
      case "go":
         return "go run";
      case "ruby":
         return "ruby";
      default:
         return null;
   }
};

module.exports = getCompileCommand;
