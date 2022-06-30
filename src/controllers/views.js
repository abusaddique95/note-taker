const path = require("path");

const renderHomePage = (req, res) => {
  try {
    return res.sendFile(path.join(__dirname, "../../public/index.html"));
  } catch (error) {
    console.log(`[error: failed to load homepage |" ${error.message}]`);
  }
};
const renderNotePage = (req, res) => {
  try {
    return res.sendFile(path.join(__dirname, "../../public/notes.html"));
  } catch (error) {
    console.log(`[error: failed to load notes page |" ${error.message}]`);
  }
};

module.exports = {
  renderHomePage,
  renderNotePage,
};
