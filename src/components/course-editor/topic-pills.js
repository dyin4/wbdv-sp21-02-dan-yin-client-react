import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom"
import topicService from '../../services/topic-service'
import "../../index.css"

const TopicPills = ({topics = [],
    findTopicsForLesson,
    createTopic,
    deleteTopic,
    updateTopic
}) => {
  const {layout, courseId, moduleId, lessonId, topicId} = useParams();
  const[deleted, setDelete] = useState(false)
  const[updated, setUpdate] = useState(false)
  //
  useEffect(() => {
    setDelete(false)
    setUpdate(false)
    if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
      findTopicsForLesson(lessonId)
    }else{
      findTopicsForLesson("null")
    }
  }, [lessonId, deleted, updated])

  return(
      <div>
        <ul className="nav nav-pills">
          {
            topics.map(topic =>
                <li className="nav-item">
                  <EditableItem
                      active={topicId === topic._id}
                      to={`/courses/${layout}/edit/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                      item={topic}
                      key={topic._id}
                      deleteItem={deleteTopic}
                      updateItem={updateTopic}
                      setUpdate={setUpdate}
                      setDelete={setDelete}
                  />
                </li>
            )
          }
          <li className="dy-fa-plus">
            <i className="fas fa-plus fa-2x d-flex justify-content-center dy-fa-plus" onClick={() => createTopic(lessonId)}></i>
          </li>
        </ul>
      </div>
  )
}
const stateToPropsMapper = (state) => {
  return {
    topics: state.topicReducer.topics
  }
}
const dispatchPropsMapper = (dispatch) => ({
  findTopicsForLesson: (lessonId) => {
    console.log("LOAD Topics FOR MODULE:", lessonId)
    topicService.findTopicsForLesson(lessonId)
    .then(topics => dispatch({
      type: "FIND_TOPICS",
      topics
    }))
  },

  createTopic: (lessonId) => {
    console.log("create topic", lessonId)
    topicService.createTopic(lessonId, {title: "New Topic"})
    .then(topic => dispatch({
      type: "CREATE_TOPIC",
      topic
    }))

  },

  deleteTopic: (topic) => {
    console.log("delete lesson", topic._id)
    topicService.deleteTopic(topic._id)
    .then(topic =>
        dispatch({
      type: "DELETE_TOPIC",
      delete: topic
    }),
    dispatch({
      type: "FIND_WIDGETS",
      widgets:[]
    }))
  },
  //
  updateTopic: (topic) => {
    topicService.updateTopic(topic._id, topic)
    .then(topic => dispatch({
      type: "UPDATE_TOPIC",
      update: topic
    }))
  }
})
//
export default connect(stateToPropsMapper, dispatchPropsMapper)(TopicPills)