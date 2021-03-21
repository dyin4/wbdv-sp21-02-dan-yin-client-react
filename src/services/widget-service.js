

const findWidgetsForTopic = (topicId) =>
    fetch(`https://danyinhw.herokuapp.com/data/topics/${topicId}/widgets`)
    .then(response => response.json())

const createWidgetsForTopic = (topicId) =>
    fetch(`https://danyinhw.herokuapp.com/data/topics/${topicId}/widgets`, {
      method:"POST",
      body: JSON.stringify({type:"HEADING", size: 1, text:"New Widget"}),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())

export const deleteWidget= (wid) =>
    fetch(`https://danyinhw.herokuapp.com/data/widgets/${wid}`, {
      method:"DELETE",
    }).then(response => response.json());

export const updateWidget = (wid, widget) =>
    fetch(`https://danyinhw.herokuapp.com/data/widgets/${wid}`, {
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