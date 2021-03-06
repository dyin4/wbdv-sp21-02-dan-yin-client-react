import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import "../../index.css"
import Navigation from "../course-navigation";

export default class CourseTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <>
          <div className="fixed-top">
          <Navigation find={this.props.find} showAll={this.props.showAll}
                      addCourse={this.props.addCourse}/>
          </div>
          <a href="#" className="float" onClick={() => this.props.addCourse("")}>
            <i className="fa fa-plus my-float"></i>
          </a>
          <div className="container dy-table">
          <table className="table">
            <tbody>
            <tr>
              <th>Title</th>
              <th className="d-none d-md-table-cell">Owned by</th>
              <th className="d-none d-lg-table-cell">Last modified</th>
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
                      key={course._id}
                      owner={course.owner}
                      title={course.title}
                      course={course}
                      lastModified={course.lastModified}
                      deleteCourse={this.props.deleteCourse}
                      updateCourse={this.props.updateCourse}
                      showNav = {this.props.showNav}
                  />
              )
            }

            </tbody>
          </table>
        </div>
        </>
    )
  }

}