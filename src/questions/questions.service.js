const questionsData = require("./questions");

const getQuestion = (name) =>
  questionsData.find(
    (question) =>
      question.title.toLocaleLowerCase() === name.toLocaleLowerCase()
  );

const getQuestions = () => {
  return questionsData;
};

module.exports = {
  getQuestions,
  getQuestion,
};
