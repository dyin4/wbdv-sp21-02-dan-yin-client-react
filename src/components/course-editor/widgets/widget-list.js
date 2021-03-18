import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetActions, {findWidgetsForTopics} from "../../actions/widget-actions";
import {connect} from "react-redux";
import widgetReducer from "../../../reducer/widget-reducer";

const WidgetList = ({
    widgets = [],
  findWidgetsForTopics,
  createWidgetsForTopic,
  deleteWidget,
  updateWidget

}) => {
  //TODO: move state management to widgets-reducer
  const {topicId} = useParams();
  const [selectedWidget, setWidget] = useState({});

  useEffect(() => {
    //Move server communication to widget-service
   findWidgetsForTopics(topicId)

  }, [topicId])

  // const createWidgetsForTopic = () => {
  //
  //   fetch(`http://localhost:8080/data/topics/${topicId}/widgets`, {
  //     method:"POST",
  //     body: JSON.stringify({type:"HEADING", size: 1, text:"New Widget"}),
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   }).then(response => response.json()).
  //   then(actualWidget => {
  //     setWidgets(widgets => ([...widgets, actualWidget]
  //     ))
  //   })
  //
  // }
  // const deleteWidget = (wid) =>{
  //   fetch(`http://localhost:8080/data/widgets/${wid}`, {
  //     method:"DELETE",
  //   }).then(response => {
  //     setWidgets(pre =>
  //     pre.filter(w => w.id !== wid))
  //   })
  //
  // }
  // const updateWidget = (wid, widget) =>{
  //
  //   fetch(`http://localhost:8080/data/widgets/${wid}`, {
  //     method:"PUT",
  //     body: JSON.stringify(widget),
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   }).then(response => {
  //     setWidgets(pre =>
  //         pre.map(w => w.id !== wid ? w : widget))
  //     setWidget({})
  //   })
  //
  // }
  return(
      <div>
        <i className="fas fa-plus fa-2x float-right" onClick={() => {
          createWidgetsForTopic(topicId)
        }}></i>
        <h2>Widget {widgets.length} {selectedWidget.id}</h2>
        <ul className="list-group">
          {
            widgets.map(widget =>
            <li className="list-group-item" key={widget.id}>
              {
                selectedWidget.id === widget.id &&
                    <>
                      <i className="fas fa-2x fa-check float-right" onClick={() => {
                        updateWidget(widget.id, selectedWidget)
                      }}></i>
                      <i className="fas fa-2x fa-trash float-right" onClick={() => {
                       deleteWidget(widget.id)
                      }}></i>
                    </>
              }
              { selectedWidget.id !== widget.id && <i className="fas fa-2x fa-cog float-right"
                  onClick={() => setWidget(widget)}></i>}

              {widget.type}
          {
            widget.type === "HEADING" &&
              <HeadingWidget
                  editing = { selectedWidget.id === widget.id}
                  widget = {widget}
                  update = {updateWidget}
              />
          }

              {
                widget.type === "PARAGRAPH" &&
                <ParagraphWidget
                    editing = { selectedWidget.id === widget.id}
                    widget = {widget}/>
              }
            </li>
            )
          }


        </ul>

      </div>
  )
}

const stateToPropsMapper = (state) => {
  return {
    widgets: state.widgetReducer.widgets
  }
}

const dispatchPropsMapper = (dispatch) => ({
  findWidgetsForTopics: (topicId) => widgetActions.findWidgetsForTopics(dispatch, topicId),
  createWidgetsForTopic: (topicId) => widgetActions.createWidgetsForTopic(dispatch, topicId)
})

export default connect(stateToPropsMapper, dispatchPropsMapper)(WidgetList)