import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams, Redirect, Link, withRouter, Route} from 'react-router-dom'
import moduleService from "../../services/module-service"
import {compose} from "redux"
import moduleActions from "../actions/module-actions";

const ModuleList = ({
  modules = [],
  createModule,
  deleteModule,
  updateModule,
  findModulesForCourse,
}) => {

  const {layout, courseId, moduleId} = useParams();
  const[deleted, setDelete] = useState(false)
  const[updated, setUpdate] = useState(false)


  useEffect(() => {
    findModulesForCourse(courseId)

  }, [])

    return (
        <div>
          <ul className="list-group">
            {
              modules.map(module =>
                  <li className={`list-group-item ${module._id === moduleId
                      ? 'active' : ''}`}>
                    <EditableItem
                        to={`/courses/${layout}/edit/${courseId}/${module._id}`}
                        key={module._id}
                        item={module}
                        deleteItem={deleteModule}
                        updateItem={updateModule}
                        setDelete={setDelete}
                        setUpdate={setUpdate}
                    />
                  </li>
              )
            }
            <li className="list-group-item">
              <i onClick={() => createModule(courseId)}
                 className="fa fa-plus fa-2x d-flex justify-content-center "></i>

            </li>
          </ul>
        </div>)

}

const stateToPropsMapper = (state) => {
  return {
    modules: state.moduleReducer.modules
  }

}

const dispatchPropsMapper = (dispatch) => {
  return {
    createModule: (courseId) => {
     moduleActions.createModule(dispatch, courseId)
    },
    deleteModule: (item) =>
    {moduleActions.deleteModule(dispatch, item)},

    updateModule: (newItem) => {
     moduleActions.updateModule(dispatch, newItem)
    },

    findModulesForCourse: (courseId) => {
     moduleActions.findModulesForCourse(dispatch, courseId)
    }

  }

}

export default compose (withRouter, connect(stateToPropsMapper, dispatchPropsMapper))(ModuleList)