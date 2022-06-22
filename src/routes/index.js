const { router } = require("express");

const views = require("./views");
const api = require("./api");
const notes = require("./notes");

const router = Router();

router.use("/api", api);
router.use("/views", views);

module.exports = router;
