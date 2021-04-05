import quizService from "../../services/quiz-service"

export const findQuestionsForQuiz = (dispatch, quizId) => {
  quizService.findQuizById(quizId)
  .then(questions => dispatch({
    type: "FIND_QUESTIONS",
    questions
  }))
}

const quizActions = {
  findQuestionsForQuiz

}
export  default quizActions