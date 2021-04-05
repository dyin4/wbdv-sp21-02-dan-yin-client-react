const WIDGET_URL = process.env.REACT_APP_WIDGET_URL
const findWidgetsForTopic = (topicId) =>
    fetch(`${WIDGET_URL}/topics/${topicId}/widgets`)
    .then(response => response.json())

const createWidgetsForTopic = (topicId) =>
    fetch(`${WIDGET_URL}/topics/${topicId}/widgets`, {
      method:"POST",
      body: JSON.stringify({type:"HEADING", size: 1, text:"New Widget"}),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())

export const deleteWidget= (wid) =>
    fetch(`${WIDGET_URL}/widgets/${wid}`, {
      method:"DELETE",
    }).then(response => response.json());

export const updateWidget = (wid, widget) =>
    fetch(`${WIDGET_URL}/widgets/${wid}`, {
      method:"PUT",
      body: JSON.stringify(widget),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json());


export default {
  findWidgetsForTopic,
  updateWidget,
  deleteWidget,
  createWidgetsForTopic
}