const initialState = {
  topics:[
  ]
}

const topicReducer = (state = initialState, action)=> {
  switch (action.type) {
    case "FIND_TOPICS":
      return {
        ...state,
        topics: action.topics
      }

    case "CREATE_TOPIC":
        return {
          ...state,
          topics: [...state.topics,
          action.topic]
      }

    case "DELETE_TOPIC":
      return {
        ...state,
        topics: state.topics.filter(topic => {
          if(topic._id === action.delete._id){
            return false
          }else{
            return true
          }
        })
      }

    case "UPDATE_TOPIC":
      return {
        ...state,
        topics: state.topics.map(topic => {
          if(topic._id === action.update._id){
            return action.update
          }else{
            return topic
          }
        })
      }

    default:
      return state
  }
}

export default topicReducer