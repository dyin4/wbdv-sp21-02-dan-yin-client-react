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
          <table className="table">
            <tbody>
              <tr>
                <th>Title</th>
                <th className="d-none d-sm-table-cell">Owned by</th>
                <th className="d-none d-md-table-cell">Last modified</th>
                <th className="table-btn float-right">
                  <a href="#"> <i
                      className="fas fa-folder"></i></a>
                  <a href="#"> <i
                      className="fas fa-sort-alpha-down"></i></a>
                  <Link to="/courses/grid">
                    <i className="fas fa-th"></i>
                  </Link>

                </th>
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