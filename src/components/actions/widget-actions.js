import widgetService from "../../services/widget-service"

const FIND_WIDGETS = "FIND_WIDGETS"
const CREATE_WIDGET = "CREATE_WIDGET"

export const createWidgetsForTopic = (dispatch, topicId) => {
  widgetService.createWidgetsForTopic(topicId)
  .then(theActualWidget => dispatch({
    type: CREATE_WIDGET,
     widget: theActualWidget

  }))
}
export const deleteWidget= (dispatch, wid) =>
    widgetService.deleteWidget(wid)
    .then(status => {
      dispatch({
        type: "DELETE_WIDGET",
        wid:wid
      })
    })

// export const updateModule = (dispatch, newItem) => {
//   moduleService.updateModule(newItem._id, newItem).then(status =>
//       dispatch({type: "UPDATE_MODULE", updateModule: newItem})
//   )
// }

export const findWidgetsForTopics = (dispatch, topicId) => {
  widgetService.findWidgetsForTopic(topicId)
  .then(widgets => dispatch({
    type: FIND_WIDGETS,
    widgets
  }))
}

const widgetActions = {
 findWidgetsForTopics,
  createWidgetsForTopic,
  deleteWidget

}

export  default widgetActions
