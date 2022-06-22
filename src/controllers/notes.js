const getNotes = (req, res) => {
  res.send("getNotes");
};
const deleteNote = (req, res) => {
  res.send("deleteNotes");
};
const createNote = (req, res) => {
  res.send("createNotes");
};

module.exports = {
  getNotes,
  deleteNote,
  createNote,
};
