import React from 'react'
import EditingItem from "./editing-item";

const ImageWidget = ({widget, editing, update, deleteWidget, setWidget}) => {

  return (<div>
        {
          !editing &&
          <img width={widget.width} height={widget.height} src={widget.url}/>

        }
        {
          editing &&
          <EditingItem widget = {widget} update = {update} deleteWidget={deleteWidget}
                       setWidget = {setWidget}/>

        }

      </div>
  )
}
export default ImageWidget

