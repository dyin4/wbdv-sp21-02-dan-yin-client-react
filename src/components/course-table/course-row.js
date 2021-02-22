import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "../../index.css"

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
                              onChange={e => {
                                console.log('owwo')
                                setNewTitle(e.target.value)
                              }
                              }

            ></input>
          }
        </td>
        <td className="d-none d-md-table-cell">{owner}</td>
        <td className="d-none d-lg-table-cell">{lastModified}</td>
        <td>
          {editing && <i className="fas fa-times float-right fa-2x"
              onClick={() => {
                setEditing(false)
                deleteCourse(course)
              }
              }></i>}
          {editing && <i className="fas fa-check float-right fa-2x" onClick={saveTitle}></i>}
          {!editing && <i className="fas fa-edit float-right fa-2x" onClick={() => {
            //
            // console.log('HERE',title)
            // console.log('HERE',newTitle)
            // setNewTitle(title)
            setEditing(true)
          }}></i>}
        </td>
      </tr>)
}

export default CourseRow