const initialState = {
  questions:[
  ]
}

const quizReducer = (state = initialState, action)=> {
  switch (action.type) {
    case "FIND_QUESTIONS":
      return {
        ...action.payload.questions
      }

    default:
      return state
  }
}

export default quizReducer