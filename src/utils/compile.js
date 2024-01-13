const getCompileCommand = (language) => {
   switch (language.toLowerCase()) {
      case "python":
         return "python";
      case "javascript":
         return "node";
      case "rust":
         return "cargo run";
      case "ruby":
         return "ruby";
      default:
         return null;
   }
};

module.exports = getCompileCommand;
