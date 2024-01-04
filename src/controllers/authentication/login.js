const UserModel = require("../../schemas/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res) => {
   try {
      const { email, password } = req.body;

      // Find user in database
      const user = await UserModel.findOne({ email });

      // Check if user exist in database
      if (!user) {
         return res.status(401).json({ error: "Invalid credentials" });
      }

      // Verify user given password & database password
      const passwordMatch = await bcrypt.compare(password, user?.password);

      if (!passwordMatch) {
         return res.status(401).json({ error: "Invalid credentials" });
      }

      // Generate JWT token
      const token = jwt.sign(
         { name: user.name, email },
         process.env.JWT_SECRET,
         {
            expiresIn: "1h",
         }
      );
      res.json({ token: token });
   } catch {
      res.status(500).json({ error: "Internal server error" });
   }
};

module.exports = userLogin;
