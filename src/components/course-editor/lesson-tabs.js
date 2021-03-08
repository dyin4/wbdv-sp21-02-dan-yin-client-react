import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom"
import lessonService from '../../services/lesson-service'
import "../../index.css"

const LessonTabs = ({lessons=[
  {_id:"123", title: "Lesson A"},
  {_id:"124", title: "Lesson B"},
  {_id:"125", title: "Lesson C"},

],findLessonsForModule,
  createLessonForModule,
  deleteLessonForModule,
  updateLesson
}) => {
  const {layout, courseId, moduleId, lessonId} = useParams();
  const[deleted, setDelete] = useState(false)
  const[updated, setUpdate] = useState(false)

  useEffect(() => {
    setDelete(false)
    setUpdate(false)
    if(moduleId !== "undefined" && typeof moduleId !== "undefined"){
      findLessonsForModule(moduleId)
    }else{
      findLessonsForModule("null")
    }
  }, [moduleId, deleted, updated])
  return(
  <div>
    <ul className="nav nav-tabs">
      {
        lessons.map(lesson =>
            <li className="nav-item">
              <EditableItem
                  active={lessonId ===lesson._id}
                  to={`/courses/${layout}/edit/${courseId}/${moduleId}/${lesson._id}`}
                  key={lesson._id}
                  item={lesson}
                  deleteItem={deleteLessonForModule}
                  updateItem={updateLesson}
                  setDelete = {setDelete}
                  setUpdate = {setUpdate}
              />
            </li>
        )
      }
      <li className="dy-fa-plus">
        <i className="fas fa-plus fa-2x d-flex justify-content-center dy-fa-plus" onClick={() => createLessonForModule(moduleId)}></i>
      </li>
    </ul>
  </div>
  )
}
const stateToPropsMapper = (state) => {
  return {
    lessons: state.lessonReducer.lessons
  }
}
const dispatchPropsMapper = (dispatch) => ({
  findLessonsForModule: (moduleId) => {
    console.log("LOAD LESSONS FOR MODULE:")
    console.log(moduleId)
    lessonService.findLessonsForModule(moduleId)
    .then(lessons => dispatch({
      type: "FIND_LESSONS",
      lessons
    }))
  },

  createLessonForModule: (moduleId) => {
    console.log("create lesson", moduleId)
    lessonService.createLessonForModule(moduleId, {title:"New Lesson"})
    .then(lesson => dispatch({
      type: "CREATE_LESSON",
      lesson
    }))
  },

  deleteLessonForModule: (lesson) => {
    console.log("delete lesson", lesson._id)
    lessonService.deleteLessonForModule(lesson._id)
    .then(lesson => dispatch({
      type: "DELETE_LESSON",
      lessonToDelete: lesson
    }))
  },

  updateLesson: (lesson) => {
    console.log("update lesson", lesson._id)
    lessonService.updateLesson(lesson._id, lesson)
    .then(lesson => dispatch({
      type: "UPDATE_LESSON",
      lessonToUpdate: lesson
    }))
  }
})

export default connect(stateToPropsMapper, dispatchPropsMapper)(LessonTabs)