import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      return res
        .status(401)
        .json({ success: false, message: "User already exist!" });
    }

    // Hashed the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await User({
      name,
      email,
      password: hashPassword,
    });
    await newUser.save();

    res
      .status(201)
      .json({ success: true, message: "Registration successful", newUser });
  } catch (error) {
    res.status(500).json({ success: true, message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User doesn't exist!" });
    }

    // Compare password
    const passCompare = await bcrypt.compare(password, user.password);

    if (!passCompare) {
      return res
        .status(401)
        .json({ success: false, message: "Password doesn't match!" });
    }

    res.status(200).json({ success: true, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ success: true, message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ success: true, message: error.message });
  }
};
