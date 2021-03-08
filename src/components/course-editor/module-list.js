import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams, Redirect, Link, withRouter, Route} from 'react-router-dom'
import moduleService from "../../services/module-service"
import {compose} from "redux"
import CourseEditor from "./course-editor";

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
      moduleService.createModule(courseId, {title:"New Title"})
      .then(theActualModule => dispatch({
        type: "CREATE_MODULE",
        module: theActualModule

      }))
    },
    deleteModule: (item) =>
        moduleService.deleteModule(item._id)
        .then(status => dispatch({
          type: "DELETE_MODULE",
          moduleToDelete: item
        })),

    updateModule: (newItem) => {
      moduleService.updateModule(newItem._id, newItem).then(status =>
      dispatch({type: "UPDATE_MODULE", updateModule: newItem})
      )
    },

    findModulesForCourse: (courseId) => {
      moduleService.findModulesForCourse(courseId)
      .then(theModules => dispatch({
        type: "FIND_MODULES_FOR_COURSE",
        modules: theModules
      }))
    }

  }

}

export default compose (withRouter, connect(stateToPropsMapper, dispatchPropsMapper))(ModuleList)