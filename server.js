import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import MongoStore from "connect-mongo";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import connectDB from "./config/db.js";
import sessionConfig from "./config/session.js";
import authRoutes from "./routes/authRoutes.js";    
import postRoutes from "./routes/postRoutes.js"

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

// DB Connect
connectDB();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(session(sessionConfig));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
