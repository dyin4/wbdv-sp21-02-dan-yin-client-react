import "../index.css"
import "../styles/course-navigation.css"

const Navigation = () =>
  <div className="wbdv-sticky-nav-bar">
    <div className="row" id="topnav">
      <div className="col-2 col-lg-1">
        <a href="#">
          <i className="fas fa-bars fa-2x"></i>
        </a>
      </div>
      <div className="col-3 d-none d-lg-block course-manager">
        Course Manager
      </div>
      <div className="col-7">
        <input className="form-control" id="input-course-title"
               placeholder="New Course Title"/>
      </div>
      <div className="col-2 col-lg-1">
        <a href="#">
          <i className="fas fa-plus-circle fa-2x float-right"></i>
        </a>
      </div>
    </div>

  </div>


export default Navigation