const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/danyin/lessons"
const TOPICS_URL = "https://wbdv-generic-server.herokuapp.com/api/danyin/topics"

const findWidgetsForTopic = (topicId) =>
    fetch(`http://localhost:8080/data/topics/${topicId}/widgets`)
    .then(response => response.json())

const createWidgetsForTopic = (topicId) =>
    fetch(`http://localhost:8080/data/topics/${topicId}/widgets`, {
      method:"POST",
      body: JSON.stringify({type:"HEADING", size: 1, text:"New Widget"}),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())

export const deleteWidget= (wid) =>
    fetch(`http://localhost:8080/data/widgets/${wid}`, {
      method:"DELETE",
    }).then(response => response.json());

export const updateWidget = (wid, widget) =>
    fetch(`http://localhost:8080/data/widgets/${wid}`, {
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