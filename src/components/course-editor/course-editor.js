import React from 'react'
import {Link} from "react-router-dom";
import "../../styles/course-editor.css";

const CourseEditor = ({history}) =>

    <div className="container dy-editor-container">
      <nav className="navbar">
        <div className="container-fluid">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link to="/courses/table" className="nav-link">
                <i className="fas fa-arrow-left fa-lg"
                   onClick={() => history.goBack()}></i>
              </Link>
            </li>
            <span className="navbar-text">
         CS5610 - WebDev
        </span>
            <li className="nav-item">
              <a className="nav-link" href="#">Build</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page"
                 href="#">Page</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Theme</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Store</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Apps</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Settings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-plus fa-lg" id="plus"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row justify-content-center min-vh-100">
          <div className="col-4">
            <ul className="list-group">
              <li className="list-group-item">
                Module 1 -jQuery
                <i className="fas fa-trash float-right"></i>
              </li>
              <li className="list-group-item active" aria-current="true">
                Module 2 - React
                <i className="fas fa-trash float-right"></i>
              </li>
              <li className="list-group-item">
                Module 3 - Redux
                <i className="fas fa-trash float-right"></i>
              </li>
              <li className="list-group-item">
                Module 4 - Native
                <i className="fas fa-trash float-right"></i>
              </li>
              <li className="list-group-item">
                Module 5 - Angular
                <i className="fas fa-trash float-right"></i>
              </li>
              <li className="list-group-item">
                Module 6 - Node
                <i className="fas fa-trash float-right"></i>
              </li>
              <li className="list-group-item">
                Module 7 - Mongo
                <i className="fas fa-trash float-right"></i>
              </li>
            </ul>
            <a className="nav-link" href="#" id="plus">
              <i className="fas fa-plus float-right fa-lg"></i>
            </a>
          </div>
          <div className="col-8">
            <br/>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Topic
                  1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Topic 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Topic 3</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Topic 4</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-plus"></i>
                </a>
              </li>

            </ul>
            Content
          </div>

        </div>
      </div>


    </div>

export default CourseEditor