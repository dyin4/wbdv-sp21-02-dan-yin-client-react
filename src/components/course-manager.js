import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Route} from "react-router-dom";
import courseService, {findAllCourse, deleteCourse, createCourse} from "../services/course-service";
import Navigation from "./course-navigation";
import "../index.css"

class CourseManager extends React.Component {

  state = {
    courses: [
    ]
  }

  componentDidMount = () => {
    // findAllCourse().then(actualCourses => this.setState({courses: actualCourses}))
    findAllCourse().then(courses => this.setState({courses}))

  }

  addCourse = () => {
    const newCourse = {
      title: "New Course",
      owner: "me",
      lastModified: "1/1/2021",
      img : "https://i.pinimg.com/originals/c1/78/5d/c1785d50a929254419fa4aad0560b058.png"
    }

    courseService.createCourse(newCourse)
      .then(course => this.setState((prevState) =>
      ({...prevState,
        courses: [
            ...prevState.courses,
            course
        ]
      })))

    // this.state.courses.push(newCourse)
    // this.setState(this.state)
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
        )})))
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
          <Navigation/>
          <a href="#" className="float" onClick={this.addCourse}>
            <i className="fa fa-plus my-float"></i>
          </a>

          <div className="container">
          <Route path="/courses/table">
            <CourseTable
                updateCourse={this.updateCourse}
                deleteCourse={this.deleteCourse}
                courses={this.state.courses}/>
          </Route>

          <Route path={"/courses/grid"}>
            <CourseGrid  updateCourse={this.updateCourse}
                         deleteCourse={this.deleteCourse}
                          courses={this.state.courses}/>
          </Route>

          <Route path="/courses/editor" render={(props) =>
              <CourseEditor {...props}/>
          }>
          </Route>
          </div>

        </>

    )
  }

}

export default CourseManager