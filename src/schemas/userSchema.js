const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   password: { type: String, required: true },
});

// User model
const UserModel = mongoose.model("Users", userSchema);

// Export model
module.exports = UserModel;
