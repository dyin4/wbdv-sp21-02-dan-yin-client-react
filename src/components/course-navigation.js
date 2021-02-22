import "../index.css"
import "../styles/course-navigation.css"
import {useState} from "react";

const Navigation = ({find, showAll}) => {
  const [newId, setId] = useState("")
  const [newTitle, setTitle] = useState("")

  return (
      <div className="wbdv-sticky-nav-bar">
        <div className="row" id="topnav">
          <div className="col-2 col-lg-1">
            <a href="">
              <i className="fas fa-bars fa-2x"></i>
            </a>
          </div>
          <div className="col-2 d-none d-lg-block course-manager">
            Course Manager
          </div>
          <div className="col-5">
            <div className="input-group mb-3">
              <button className="btn btn-outline-secondary" type="button"
                      id="button-addon1" onClick={() => {
                console.log(newId.length)
                newId.length === 0 ? showAll() : find(newId)
              }

              }>Find
              </button>
              <input className="form-control" id="input-course-title"
                     placeholder="Input course id if you want to search!!!!!!"
                     value={newId}
                     onChange={(e) => {
                       setId(e.target.value)
                     }}/>
            </div>


          </div>
          <div className="col-3">
            <input className="form-control" id="input-course-title"
                   placeholder="New Course Title"
                   value={newTitle}
                   onChange={(e) => {
                     setTitle(e.target.value)
                   }}/>
          </div>
          <div className="col-2 col-lg-1">
            <a href="#">
              <i className="fas fa-plus-circle fa-2x float-right"></i>
            </a>
          </div>
        </div>

      </div>

  )
}

export default Navigation