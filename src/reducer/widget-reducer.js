import CREATE_WIDGET from "../components/actions/widget-actions"

const initialState = {
  widgets:[
  ]
}

const widgetReducer = (state = initialState, action)=> {
  switch (action.type) {
    case "FIND_WIDGETS":
      return {
        ...state,
        widgets: action.widgets
      }

    case "CREATE_WIDGET":
      console.log(state.widgets)
      const newState = {
        widgets: [
            ...state.widgets,
          action.widget
        ]
      }
      return newState

    case "DELETE_WIDGET":
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

export default widgetReducer