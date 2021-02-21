import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "../index.css"

const CourseCard = ({course, deleteCourse, updateCourse}) => {

  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(course.title)
  const [newUri, setNewUrl] = useState(course.img)
  const saveTitle = () => {
    setEditing(false)
    const NewCourse = {
      ...course,
      title: newTitle
    }

    updateCourse(NewCourse)

  }

  const saveUri = () => {
    setEditing(false)
    const NewCourse = {
      ...course,
      img: newUri
    }
    updateCourse(NewCourse)

  }
  return (
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <img src={newUri} className="card-img-top"
            />
            {
              !editing && <h5 className="card-title">{course.title}</h5>
            }
            {
              editing && <input className="form-control"
                                 value={newTitle}
                                 onChange={e => setNewTitle(e.target.value)}

              ></input>
            }

            {
              editing &&
                  <>
                    <label  htmlFor="uri-input" className="form-label">uri:</label>
              <input className="form-control"
              value={newUri}
              onChange={e => setNewUrl(e.target.value)}

              ></input>
              </>
            }
            <p className="card-text">Some Description</p>
            <Link to="/courses/editor"
                  className="btn btn-primary">{course.title}</Link>
            {!editing && <i className="fa fa-edit float-right fa-2x" onClick={() => setEditing(true)}></i>}

            <div className="btn-top-card">
              {editing && <i className="fas fa-check fa-2x"
                              onClick={ () =>
                              {saveTitle()
                                saveUri()}
                              }></i>}
              {editing && <i className="fas fa-times fa-2x"
                              onClick={() => {
                                setEditing(false)
                                deleteCourse(course)
                              }
                              }></i>}
            </div>

          </div>
        </div>
      </div>
  )
}

export default CourseCard