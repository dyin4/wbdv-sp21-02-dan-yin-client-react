
import moduleService from "../../services/module-service";

const CREATE_MODULE = "CREATE_MODULE";


export const createModule = (dispatch, courseId) => {
  moduleService.createModule(courseId, {title:"New Title"})
  .then(theActualModule => dispatch({
    type: CREATE_MODULE,
    module: theActualModule

  }))
}
export const deleteModule = (dispatch, item) =>
    moduleService.deleteModule(item._id)
    .then(status => {
      dispatch({
        type: "FIND_TOPICS",
        lessons:[]
      })
      dispatch({
        type: "FIND_LESSONS",
        lessons:[]
      })

      dispatch({
        type: "FIND_WIDGETS",
        widgets:[]
      })
      dispatch({
        type: "DELETE_MODULE",
        moduleToDelete: item
      })
    })

export const updateModule = (dispatch, newItem) => {
  moduleService.updateModule(newItem._id, newItem).then(status =>
      dispatch({type: "UPDATE_MODULE", updateModule: newItem})
  )
}

export const findModulesForCourse = (dispatch, courseId) => {
  moduleService.findModulesForCourse(courseId)
  .then(theModules => dispatch({
    type: "FIND_MODULES_FOR_COURSE",
    modules: theModules
  }))
}

const moduleActions = {
  createModule, findModulesForCourse, updateModule, deleteModule

}

export  default moduleActions
