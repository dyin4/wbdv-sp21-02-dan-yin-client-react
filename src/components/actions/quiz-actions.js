import quizService from "../../services/quiz-service"

export const findQuestionsForQuiz = (dispatch, quizId) => {
  quizService.findQuizById(quizId)
  .then(questions =>
      dispatch({
        type: "FIND_QUESTIONS",
        payload: {
          questions: questions
        }
      }))
}

export const selectAnswer = (dispatch, question, answer) => {
  dispatch({
    type: "SELECT_ANSWER",
    payload: {
      question:question,
      answer: answer
    }
  })
}

export const grade = (dispatch) => {
  dispatch({
    type: "GRADE",
  })
}

export const clearGrade = (dispatch) => {
  dispatch({
    type: "CLEAR_GRADE",
  })
}

export const submitQuiz = (dispatch, quizId, questions) => {
  let respond = quizService.submitQuiz(quizId, questions)
respond.then(status =>

      dispatch({
        type: "GET_SCORE",
        payload: {
          score: status.score
        }
      }))

}


const quizActions = {
  findQuestionsForQuiz, submitQuiz, selectAnswer,grade, clearGrade

}
export default quizActions