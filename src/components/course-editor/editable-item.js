import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "../../index.css"

const EditableItem = (
    {
        to="/somewhere/to/go",
      deleteItem,
      updateItem,
        active,
        setDelete,
        setUpdate,
  item={title: "some title", _id:"abc"}
  }) => {

  const [editing, setEditing] = useState(false)
  const [cachedItem, setCashedItem] = useState(item)
  return (
      <>
        {
          !editing &&
          <>
            <Link  className={`nav-link ${active?'active':''}`} to={to}>
              {item.title}
              <i onClick={() => setEditing(true)} className="fas fa-edit my-fa-edit float-right"></i>
            </Link>

            </>
        }


        {editing &&
            <div className="nav-link">
        <div className="row dy-input-row">
          <input className="col-9 col-sm-8"
              onChange={(e) =>
                  setCashedItem({...cachedItem, title: e.target.value})}
              value={cachedItem.title}
          />
          <div className="col-12 col-sm-3 d-flex justify-content-md-end my-fa-btns">
            <i onClick={() => {
              setEditing(false)
              setDelete(true)
              deleteItem(item)
            }} className="fas fa-times my-fa-times"></i>

            <i onClick={() => {
              setEditing(false)
              setUpdate(true)
              updateItem(cachedItem)
            }} className="fas fa-check my-fa-check"></i>
          </div>

        </div>
        </div>
          }
        </>
  )
}

export default  EditableItem