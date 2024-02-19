const QuestionsService = require("./questions.service");

const getQuestions = (req, res) => {
  const data = QuestionsService.getQuestions();
  return res.json(data);
};

const getQuestion = (req, res) => {
  const { name } = req.params;
  const data = QuestionsService.getQuestion(name);
  return res.json(data);
};

module.exports = {
  getQuestions,
  getQuestion,
};
