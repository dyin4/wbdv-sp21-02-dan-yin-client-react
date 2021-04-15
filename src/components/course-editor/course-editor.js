import React, {useEffect, useState} from 'react'
import {Link, useParams, useLocation} from "react-router-dom";
import "../../styles/course-editor.css";
import moduleReducer from "../../reducer/modules-reducer"
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import lessonReducer from "../../reducer/lesson-reducer";
import "../../index.css"
import TopicPills from "./topic-pills";
import topicReducer from "../../reducer/topic-reducer";
import courseService from "../../services/course-service"
import WidgetList from "./widgets/widget-list";
import widgetReducer from "../../reducer/widget-reducer";
import quizReducer from "../../reducer/quiz-reducer";

// const reducer = combineReducers({
//   moduleReducer: moduleReducer,
//   lessonReducer: lessonReducer,
//   topicReducer : topicReducer,
//   widgetReducer : widgetReducer,
//   quizReducer: quizReducer,
// })
//
// // const store = createStore(moduleReducer)
// const store = createStore(reducer)

const CourseEditor = ({}) => {

  const {layout, courseId, moduleId} = useParams();

  const [title, setTitle] = useState("");

  useEffect(() => {
    courseService.findCourseById(courseId).then((data) => setTitle(data.title))
  }, [])

  return (
      <>

        <div className="row right-block">
          <Link to={`/courses/${layout}`}
                className="fa fa-times fa-2x col-sm-1 my-close"></Link>
          <h1 className="col-sm-10">WebDev {title}</h1>

        </div>

        <div className="container dy-editor-container">
          <div className="row">
            <div className="col-4">
              <ModuleList/>
            </div>
            <div className="col-8">
              <LessonTabs/>
              <TopicPills/>
              <WidgetList/>
            </div>
          </div>

        </div>
      </>

  )
}

export default CourseEditor