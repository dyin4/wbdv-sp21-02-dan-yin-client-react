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
        widgets: state.widgets.filter(widget => {
          if(widget.id === action.wid){
            return false
          }else{
            return true
          }
        })
      }

    case "UPDATE_WIDGET":
      return {
        ...state,
        widgets: state.widgets.map(w => {
          if(w.id === action.widget.id){
            return action.widget
          }else{
            return w
          }
        })
      }

    default:
      return state
  }
}

export default widgetReducer