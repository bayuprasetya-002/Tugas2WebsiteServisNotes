import express from "express";
import { createNote, deleteNote, getNotes, updateNote } from "../controller/NoteController.js";

const router = express.Router();

router.get("/notes", getNotes);
router.post("/notes", createNote);
router.put("/notes/:id", updateNote);
router.delete("/notes/:id", deleteNote);

export default router;
