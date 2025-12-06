import express from "express";
import Connection from "./config/db.js";
import userRouter from "./routes/user.router.js";
import dotenv from "dotenv";
import cors from "cors"
dotenv.config();

const app = express();
const port = process.env.PORT;

// middleware
app.use(express.json());

// cors
app.use(cors());

// Calling Databse from config folder
Connection();

// server
app.use("/api" , userRouter)

app.listen(port, () => {
  console.log(`Server is working on port http://localhost:${port}`);
});
