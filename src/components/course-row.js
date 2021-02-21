import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "../index.css"

const CourseRow = (
    {
      deleteCourse,
      title,
      course,
      owner,
      lastModified,
      updateCourse
    }) => {

  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const saveTitle = () =>{
    setEditing(false)
    const NewCourse = {
      ...course,
      title:newTitle
    }

    updateCourse(NewCourse)

  }
  return (
      <tr>
        <td>
          {
            !editing && (
                <Link to="/courses/editor">
                  <i className="fa fa-file"></i>
                  {title}</Link>)
          }
          {
            editing && <input className="form-control"
                              value={newTitle}
                              onChange={e => setNewTitle(e.target.value)}

            ></input>
          }
        </td>
        <td>{owner}</td>
        <td>{lastModified}</td>
        <td>
          {editing && <i className="fas fa-check" onClick={saveTitle}></i>}
          {editing && <i className="fas fa-times"
              onClick={() => {
                setEditing(false)
                deleteCourse(course)
              }
              }></i>}
          {!editing && <i className="fas fa-edit" onClick={() => setEditing(true)}></i>}
        </td>
      </tr>)
}

export default CourseRow