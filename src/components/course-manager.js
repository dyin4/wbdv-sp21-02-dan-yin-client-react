import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";


class CourseManager extends React.Component {

  state ={
    courses: [
      {title: "CS5200", owner: "Frank", lastModified: "2/3/20"},
      {title: "CS5200", owner: "Dan", lastModified: "2/3/20"},
      {title: "CS5200", owner: "Bob", lastModified: "2/3/20"},
      {title: "CS5200", owner: "Mike", lastModified: "2/3/20"},
    ]
  }

  addCourse = () => {
    const newCourse = {
      title: "New Course",
      owner: "New Owner",
      lastModified: "Never"
    }

    this.state.courses.push(newCourse)
    this.setState(this.state)
  }

  deleteCourse = (courseToDelete) => {
    const newCourses = this.state.courses.filter(course => course !== courseToDelete)
    this.setState({courses:newCourses})
  }

    render(){
        return(
            <>
                <h1>Course Manager</h1>
              <button onClick={this.addCourse}>Add Course</button>
                <CourseTable deleteCourse={this.deleteCourse} courses={this.state.courses}/>
                <CourseGrid deleteCourse={this.deleteCourse} courses={this.state.courses}/>
                <CourseEditor/>
            </>

        )
    }

}

export default CourseManager