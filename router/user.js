import express from "express";
import { getAllUsers } from "../controller/user.js";
import { createUsers } from "../controller/user.js";
import { searchUser } from "../controller/user.js";
import { uptadeUser } from "../controller/user.js";
import { deleteUser } from "../controller/user.js";

const router = express.Router();

router.get("/", getAllUsers);
router.route("/").post(createUsers);
router.route("/:id").get(searchUser);
router.route("/:id").put(uptadeUser);
router.route("/:id").delete(deleteUser);

export default router;
