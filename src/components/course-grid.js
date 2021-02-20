import React from 'react'
import CourseManager from "./course-manager";
import CourseCard from "./course-card";

const CourseGrid = ({courses}) =>
    <div>

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