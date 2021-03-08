import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
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

const reducer = combineReducers({
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer,
  topicReducer : topicReducer
})

// const store = createStore(moduleReducer)
const store = createStore(reducer)

const CourseEditor = ({history}) => {

  const {layout, courseId, moduleId} = useParams();

  //
  // const[rerender, setRender] = useState(false)
  //
  // useEffect(() => {
  //   setRender(false)
  // }, [rerender])
  //
  // console.log("re", rerender)


  return (
      <Provider store={store}>
        <div className="row right-block">
          <Link to={`/courses/${layout}`}
                className="fa fa-arrow-left fa-2x col-sm-1"></Link>
          <h1 className="col-sm-10">WebDev Selected Course</h1>

        </div>

        <div className="container dy-editor-container">
          <div className="row">
            <div className="col-4">
              <ModuleList/>
            </div>
            <div className="col-8">
              <LessonTabs/>
              <TopicPills/>
            </div>
          </div>

        </div>

      </Provider>
  )
}

export default CourseEditor