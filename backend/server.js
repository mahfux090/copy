import express from "express";
import dotenv from "dotenv";
import connectDB from "./connections/connectDB.js";
import authRouter from "./routes/auth.routes.js";
import postRouter from "./routes/post.routes.js";
import galleryRouter from "./routes/gallery.routes.js";
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// App config
app.use(express.json());

// API Routes
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);
app.use("/api/gallery", galleryRouter);

// Get the home route
app.get("/", (req, res) => {
  res.send("I am home route");
});

// Run the server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectDB();
});
