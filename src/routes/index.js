const { router } = require("express");

const views = require("./views");
const views = require("./api");

const router = Router();

router.use("/api", api);
router.use("/views", views);

module.exports = router;
