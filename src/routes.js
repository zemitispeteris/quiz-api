const express = require("express");
const router = express.Router();

const questionsRoutes = require("./questions/questions.routes");

router.use("/questions", questionsRoutes);

module.exports = router;
