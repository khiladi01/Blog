import express from "express";
import { createUser , getUser } from "../controllers/signin.controllers.js";

const router = express.Router();

router.post("/create" , createUser);
router.get("/user" , getUser);

export default router;
