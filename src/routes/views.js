const { router } = require("express");

const { renderHomePage } = require("../controllers/views");
const { renderNotePage } = require("../controllers/views")



const router = Router();

router.get("/" renderHomePage);
router.get("/notes" renderNotePage);



module.exports = router;
