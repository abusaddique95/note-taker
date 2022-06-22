const renderHomePage = (req, res) => {
  res.send("renderHomePage");
};
const renderNotePage = (req, res) => {
  res.send("renderNotePage");
};

module.exports = {
  renderHomePage,
  renderNotePage,
};
