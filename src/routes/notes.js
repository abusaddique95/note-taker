const { router } = require("express");

const { getNotes } = require("../controllers/notes");
const { deleteNote } = require("../controllers/notes");
const { createNote } = require("../controllers/notes");

const router = Router();

router.get("/", getNotes);
router.delete("/:id", deleteNote);
router.post("/", createNote);

module.exports = router;
