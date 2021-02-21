import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import "../index.css"

export default class CourseTable extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <h2>Course Table</h2>

          <table className="table">
            <tbody>
            <tr>
              <td>Title</td>
              <td>Title</td>
              <td>Title</td>
              <td className="table-btn">
                <a href="#"> <i
                    className="fas fa-folder"></i></a>
                <a href="#"> <i
                    className="fas fa-sort-alpha-down"></i></a>
                <Link to="/courses/grid">
                  <i className="fas fa-th"></i>
                </Link>

              </td>
            </tr>
            {
              this.props.courses.map((course, ndx) =>
                        <CourseRow
                            key={ndx}
                            title={course.title}
                            owner={course.owner}
                            course={course}
                            lastModified={course.lastModified}
                            deleteCourse={this.props.deleteCourse}
                            updateCourse={this.props.updateCourse}
                        />
              )
            }

            </tbody>
          </table>
        </div>
    )
  }

}