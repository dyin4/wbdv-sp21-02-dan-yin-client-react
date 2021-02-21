import React from 'react'
import CourseManager from "./course-manager";
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses}) =>
    <div>

      <Link to="/courses/table">
        <i className="fas fa-2x fa-list float-right"></i>
      </Link>

      <h2>Course Grid {courses.length}</h2>
      <div className="row">


        {courses.map(course =>
            <div className="col-sm-4">
              <CourseCard course={course}/>
            </div>
        )}
      </div>


    </div>

export default CourseGrid