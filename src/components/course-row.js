import React, {useState} from 'react'
import {Link} from "react-router-dom";

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
            !editing && (<Link to="/courses/editor">
              {title}
            </Link>)
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
          <i className="fas fa-check" onClick={saveTitle}></i>
          {editing && <i className="fas fa-trash"
              onClick={() => deleteCourse(course)}></i>}
          {!editing && <i className="fas fa-edit" onClick={() => setEditing(true)}></i>}
        </td>
      </tr>)
}

export default CourseRow