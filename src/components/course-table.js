import React from 'react'
import CourseRow from "./course-row";

export default class CourseTable extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
        <>
          <h2>Course Table</h2>
          <table className="table">
            <tbody>
            {
              this.props.courses.map((course, ndx) =>
                        <CourseRow
                            key={ndx}
                            title={course.title}
                            owner={course.owner}
                            course={course}
                            lastModified={course.lastModified}
                            deleteCourse={this.props.deleteCourse}
                        />
              )
            }

            </tbody>
          </table>
        </>
    )
  }

}