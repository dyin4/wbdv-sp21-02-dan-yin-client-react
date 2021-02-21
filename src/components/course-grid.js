import React from 'react'
import CourseManager from "./course-manager";
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import "../index.css"
import CourseRow from "./course-row";

export default class CourseGrid extends React.Component{

    constructor(props) {
      super(props);
  }

  render(){
      return(

          <div>
            <table className="table">
              <tbody>

              <tr>
                <td>Recent Documents</td>
                <td>
                  <select className="form-select">
                    <option value="owned-by-me">Owned by me</option>

                  </select>

                </td>
                <td className="table-btn float-right">
                  <Link to="#"> <i
                      className="fas fa-folder"></i></Link>
                  <Link to="#"> <i
                      className="fas fa-sort-alpha-down"></i></Link>
                  <Link to="/courses/table">
                    <i className="fas fa-list"></i>
                  </Link>

                </td>
              </tr>
              </tbody>
            </table>

            <h2>Course Grid</h2>
            <div className="row">
              {this.props.courses.map((course, index )=>
                  <CourseCard course={course}
                              key={index}
                              deleteCourse={this.props.deleteCourse}
                              updateCourse={this.props.updateCourse}/>
              )}
            </div>


          </div>
      )
  }


  }
