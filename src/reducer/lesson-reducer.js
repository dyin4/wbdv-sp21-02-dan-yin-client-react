const initialState = {
  lessons:[
  ]
}

const lessonReducer = (state=initialState, action) => {
  switch (action.type) {
    case "FIND_LESSONS":
      return {
        ...state,
        lessons: action.lessons
      }

    case "CREATE_LESSON":
      return {
        ...state,
        lessons: [
          ...state.lessons,
          action.lesson
        ]
      }
    case "DELETE_LESSON":
      console.log("delete")
      return {
        ...state,
        lessons: state.lessons.filter(lesson => {
          if(lesson._id !== action.lessonToDelete._id) {
            return true
          } else {
            return false
          }
        })
      }

    case "UPDATE_LESSON":
      return {
        ...state,
        lessons: state.lessons.map(l => {
          if(l._id === action.lessonToUpdate._id){
            return action.lessonToUpdate
          }else{
            return l
          }
        })
      }

    default:
      return state
  }
}

export default lessonReducer