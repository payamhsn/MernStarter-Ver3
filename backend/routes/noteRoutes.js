import express from "express";
import {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/noteController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.use(verifyToken);

router.route("/").get(getNotes).post(createNote);

router.route("/:id").put(updateNote).delete(deleteNote);

export default router;
