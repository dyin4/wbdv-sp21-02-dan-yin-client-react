import React, {useState} from 'react'
import EditableItem from "../editable-item";
import EditingItem from "./editing-item";

const ParagraphWidget = ({widget, editing, update, deleteWidget, setWidget}) => {
  return (
      <>
      {
        editing &&
         <EditingItem widget = {widget} update = {update} deleteWidget={deleteWidget}
                      setWidget = {setWidget}/>
      }
      {
        !editing &&
        <p>
          {widget.text}
        </p>
      }

      </>
  )
}

export default ParagraphWidget