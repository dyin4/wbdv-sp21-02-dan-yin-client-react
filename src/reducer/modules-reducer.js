const initialState = {
  modules:[
    // {_id:123, title:"Module 123"},
    // {_id:124, title:"Module 124"},
    // {_id:125, title:"Module 125"},
    // {_id:126, title:"Module 126"}
  ]
}

const moduleReducer = (state = initialState, action) => {
  switch(action.type) {
    case "CREATE_MODULE":
      const newState = {
        modules: [
            ...state.modules,
            action.module
        ]
      }
      return newState

    case "DELETE_MODULE":
      return {
        ...state,
        modules: state.modules.filter(module => {
          if(module._id !== action.moduleToDelete._id) {
            return true
          } else {
            return false
          }
        })
      }
    case "UPDATE_MODULE":
      return {
        ...state,
        modules: state.modules.map(m => {
          if(m._id === action.updateModule._id){
            return action.updateModule
          }else{
            return m
          }
        })
      }

    case "FIND_MODULES_FOR_COURSE":
      return {
        ...state,
        modules: action.modules
      }
    default:
      return state
  }
}
export default moduleReducer