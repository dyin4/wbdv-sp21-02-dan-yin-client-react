const initialState = {
  questions:[],
  score:""
}

const quizReducer = (state = initialState, action)=> {
  switch (action.type) {
    case "FIND_QUESTIONS":
      console.log("reducer", action.payload.questions)
      return {
        ...state,
        questions:action.payload.questions
      }
    case "SELECT_ANSWER":
      const newQuestions = state.questions.map(question => {
        if (question.question === action.payload.question) {
          return {
            ...question,
            answer: action.payload.answer
          }

        }else{
          return question
        }
      })
      return {
        ...state,
        questions:newQuestions
      }
    case "GET_SCORE":
      return {...state,
      score: action.payload.score}

    default:
      return state
  }
}

export default quizReducer