import React from 'react'
import CourseManager from "../course-manager";
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import "../../index.css"

const CourseGrid = (props) =>

    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 row-gird-nav">
        <div className="col d-none d-md-block text-bold">Recent Documents</div>
        <div className="col d-none d-md-block">
          <select className="form-select text-bold">
            <option value="owned-by-me">Owned by me</option>

          </select>
        </div>
        <div className="col float-right">
          <div className="table-btn float-right">
            <Link to="#"> <i
                className="fas fa-folder"></i></Link>
            <Link to="#"> <i
                className="fas fa-sort-alpha-down"></i></Link>
            <Link to="/courses/table">
              <i className="fas fa-list"></i>
            </Link>
          </div>
        </div>

      </div>

      <div
          className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-card">
        {props.courses.map((course, index) =>
            <CourseCard course={course}
                        key={course._id}
                        deleteCourse={props.deleteCourse}
                        updateCourse={props.updateCourse}/>
        )}
      </div>
    </div>

export default CourseGrid
