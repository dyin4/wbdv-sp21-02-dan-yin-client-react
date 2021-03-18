import React from 'react'
import {useCallback} from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Route} from "react-router-dom";
import courseService, {
  findAllCourse,
  deleteCourse,
  createCourse
} from "../services/course-service";
import Navigation from "./course-navigation";
import "../index.css"

class CourseManager extends React.Component {

  state = {
    courses: []
  }


  componentDidMount = () => {
    // findAllCourse().then(actualCourses => this.setState({courses: actualCourses}))
    findAllCourse().then(courses => this.setState({courses: courses}))

  }

  findAllCourse = () => {
    courseService.findAllCourse().then(
        courses => this.setState({courses: courses}))
  }

  addCourse = (title) => {
    const newCourse = {
      title: title.length === 0 ? "New Course" : title,
      owner: "me",
      lastModified: "1/1/2021",
      img: "https://i.pinimg.com/originals/c1/78/5d/c1785d50a929254419fa4aad0560b058.png"
    }
    console.log('hih')
    courseService.createCourse(newCourse)
    .then(course => this.setState((prevState) =>
        ({
          ...prevState,
          courses: [
            ...prevState.courses,
            course
          ]
        })))

    // this.state.courses.push(newCourse)
    // this.setState(this.state)
  }

  findCourseById = (id) => {
    courseService.findCourseById(id).then(status => {
          console.log('HIHIHI', status)
          if (status.title !== null) {
            this.setState(
                {courses: [status]}
            )
          }
        }
    )
  }

  updateCourse = (course) => {
    console.log(course)
    courseService.updateCourse(course._id, course)
    .then(status => this.setState((prevState) =>
        ({
          ...prevState,
          courses: prevState.courses.map(c =>
              //   if(c._id === course._id){
              //     return course
              //   } else {
              //     return c
              //   }
              c._id == course._id ? course : c
          )
        })))
  }

  deleteCourse = (courseToDelete) => {
    courseService.deleteCourse(courseToDelete._id)
    .then(status => {
      // const newCourses = this.state.courses
      //     .filter(course => course !== courseToDelete)
      // this.setState({
      //   courses: newCourses
      // })
      // this.setState((prevState) => {
      //   // let nextState = {...prevState}
      //   // nextState.courses =
      //   //     prevState
      //   //         .courses
      //   //         .filter(course => course !== courseToDelete)
      //
      //   let nextState = {
      //     ...prevState,
      //     courses: prevState.courses.filter
      //               (course => course !== courseToDelete)
      //   }
      //
      //   return nextState
      // })

      this.setState((prevState) => ({
        ...prevState,
        courses: prevState.courses.filter
        (course => course !== courseToDelete)
      }))
    })
  }

  render() {
    return (
        <>

          {/*<Navigation find={this.findCourseById} showAll={this.findAllCourse}*/}
          {/*             addCourse={this.addCourse}/>*/}
          {/*  <a href="#" className="float" onClick={() => this.addCourse("")}>*/}
          {/*  <i className="fa fa-plus my-float"></i>*/}
          {/*  </a>*/}

          <div className="container">
            <Route path="/courses/table" exact={true}>
              <CourseTable
                  updateCourse={this.updateCourse}
                  deleteCourse={this.deleteCourse}
                  courses={this.state.courses}
                  find={this.findCourseById}
                  showAll={this.findAllCourse}
                  addCourse={this.addCourse}
                  />
            </Route>

            <Route path={"/courses/grid"} exact={true}>
              <CourseGrid updateCourse={this.updateCourse}
                          deleteCourse={this.deleteCourse}
                          courses={this.state.courses}
                          find={this.findCourseById}
                          showAll={this.findAllCourse}
                          addCourse={this.addCourse}/>
            </Route>

            <Route path={[
              "/courses/:layout/edit/:courseId",
              "/courses/:layout/edit/:courseId/:moduleId",
              "/courses/:layout/edit/:courseId/:moduleId/:lessonId",
              "/courses/:layout/edit/:courseId/:moduleId/:lessonId/:topicId",
              "/courses/:layout/edit/:courseId/:moduleId/:lessonId/:topicId/:widgetId"
            ]}
                   exact={true}
                   render={(props) => <CourseEditor {...props}/>}/>
          </div>

        </>

    )
  }

}

export default CourseManager