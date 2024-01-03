const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   email: { type: String, required: true },
   password: { type: String, required: true },
});

// User model
const UserModel = mongoose.model("Users", userSchema);

// Export model
module.exports = UserModel;
