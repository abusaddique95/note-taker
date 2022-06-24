const { v4: uuidv4 } = require("uuid");
const path = require("path");
const { readDataFromFile, writeDataToFile } = require("../utils/writetofile");

const getNotes = (req, res) => {
  const db = readDataFromFile("db");

  return res.json(db);
};

const deleteNote = (req, res) => {
  // get id from req
  const { id } = req.params;

  // get all notes
  const notesInfo = readDataFromFile("db");

  // remove note from notes
  const filteredNotes = notesInfo.filter((note) => note.id !== id);

  writeDataToFile("db", filteredNotes);

  return res.json({
    message: "Successfully deleted note",
  });
};

const createNote = (req, res) => {
  const { title, text } = req.body;

  const id = uuidv4();
  rs;
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
