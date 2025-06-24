import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import MongoStore from "connect-mongo";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import connectDB from "./config/db.js";
import sessionConfig from "./config/session.js";

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
app.use("/api/auth", (await import("./routes/authRoutes.js")).default);
app.use("/api/posts", (await import("./routes/postRoutes.js")).default);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
