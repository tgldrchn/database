import express from "express";
import { getAllUsers } from "../controller/user.js";
import { createUsers } from "../controller/user.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/users", createUsers);

export default router;
