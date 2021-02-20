import React from 'react'

const CourseRow = ({deleteCourse, title, course, owner, lastModified}) =>
    <tr>
      <td>{title}</td>
      <td>{owner}</td>
      <td>{lastModified}</td>
      <td>
        <i className="fas fa-check"></i>
        <i className="fas fa-trash" onClick={() => deleteCourse(course)}></i>
        <i className="fas fa-edit"></i>
      </td>
    </tr>


export default CourseRow