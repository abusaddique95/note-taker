// required frameworks
const express = require("express");

const routes = require("./routes");

// choose port
const PORT = process.env.PORT || 4000;

const app = express();

// add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// add listener
app.listen(PORT, () => {
  console.log(`Sever running on http://localhost:${PORT}`);
});
