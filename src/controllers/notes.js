const { v4: uuidv4 } = require("uuid");

const { readDataFromFile, writeDataToFile } = require("../utils/writetofile");

const getNotes = (req, res) => {
  try {
    const db = readDataFromFile("db");

    return res.json(db);
  } catch (error) {
    console.log(`[ERROR: Failed to get Notes | ${error.message}]`);
  }
};

const deleteNote = (req, res) => {
  res.send("deleteNotes");
};

const createNote = (req, res) => {
  const { title, text } = req.body;

  const id = uuidv4();

  const note = {
    id,
    title,
    text,
  };

  // push
  const notes = readDataFromFile("db");
  // new notes
  notes.push(note);

  writeDataToFile("db", notes);

  return res.json({
    message: "Successfully created new note",
  });
};

module.exports = {
  getNotes,
  deleteNote,
  createNote,
};
