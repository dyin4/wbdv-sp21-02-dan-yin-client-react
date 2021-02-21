import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>

    <div>
      <h2>

        <Link to="/courses/table">
          <i className="fas fa-arrow-left"></i>
        </Link>

        {/*<Link to="/courses/table">*/}
        {/*  <i onClick={() => props.history.goBack()} className="fas fa-times float-right"></i>*/}
        {/*</Link>*/}

        <Link to="/courses/table">
          <i onClick={() => history.goBack()} className="fas fa-arrow-right float-right"></i>
        </Link>

        Course Editor </h2>
    </div>

export default CourseEditor