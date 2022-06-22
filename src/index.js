// required frameworks
const express = require("express");

// import routes and middleware from their files

// choose port
const PORT = process.env.PORT || 4000;

const app = express();

// add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// add listener
app.listen(PORT, () => {
  console.log(`Sever running on http://localhost:${PORT}`);
});
