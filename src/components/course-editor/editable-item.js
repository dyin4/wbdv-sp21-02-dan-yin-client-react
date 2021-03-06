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
            <div className={`nav-link ${active?'active':''}`} >
            <Link  to={to}>
              {item.title}
            </Link>
              <i onClick={() => setEditing(true)} className="fas fa-edit my-fa-edit float-right"></i>
            </div>
            </>
        }


        {editing &&
        <>
          <input className="col-12 col-sm-10"
              onChange={(e) =>
                  setCashedItem({...cachedItem, title: e.target.value})}
              value={cachedItem.title}
          />
          <div className="col-2 d-flex my-fa-btns">
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
        </>
          }
        </>
  )
}

export default  EditableItem