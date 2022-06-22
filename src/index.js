// required frameworks
const express = require("express");
const mysql2 = require("mysql2/promise");

const routes = require("./routes");


const init = async () => {
  
  try {

    const PORT = process.env.PORT || 4000;
    
    const config = {
      host: "localhost"
      user: "root"
      password: "password"
      database: "note_taker_db"
    };
    
    // connect database
    const db = await mysql2.createConnection(config);
    
    const app = express();
    // add middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(routes);
    
    // add listener
    app.listen(PORT, () => {
  
  console.log(`Sever running on http://localhost:${PORT}`);
  });
} catch (error) {
  console.log(`[ERROR]: failed to start server | ${error.message}`);
}
};

init();


