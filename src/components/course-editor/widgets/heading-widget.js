import React, {useState} from 'react'
import EditableItem from "../editable-item";
import EditingItem from "./editing-item";

const HeadingWidget = ({widget, editing, update, deleteWidget, setWidget}) => {
  const [cachedItem, setCashedItem] = useState({widget})
  const CustomTag = `h${widget.size}`;
  console.log("update", cachedItem);
  return (
      <>
        {
          editing && <EditingItem
              widget = {widget}
              update = {update}
              deleteWidget = {deleteWidget}
              setWidget = {setWidget}/>

        }
        {
          !editing &&
          <>
          <CustomTag>{widget.text}</CustomTag>
            {/*{widget.size === 1 && <h1>{widget.text}</h1>}*/}
            {/*{widget.size === 2 && <h2>{widget.text}</h2>}*/}
            {/*{widget.size === 3 && <h3>{widget.text}</h3>}*/}
            {/*{widget.size === 4 && <h4>{widget.text}</h4>}*/}

          </>
        }

      </>
  )
}

export default HeadingWidget