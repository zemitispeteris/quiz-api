const router = require("express").Router();
const { getQuestions, getQuestion } = require("./questions.controller");

router.get("/", getQuestions);

router.get("/:name", getQuestion);

module.exports = router;
