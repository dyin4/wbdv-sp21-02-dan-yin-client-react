import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetActions, {findWidgetsForTopics} from "../../actions/widget-actions";
import {connect} from "react-redux";
import "../../../index.css"
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

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

  console.log("widgets", widgets)

  return (
      <div className="container">
        <i className="fas fa-plus fa-2x float-right" onClick={() => {
          createWidgetsForTopic(topicId)
        }}></i>

        <ul className="list-group dy-widget-list-group">
          {
            widgets.map(widget =>
                <li className="list-group-item" key={widget.id}>
                  {selectedWidget.id !== widget.id &&
                  <i className="fas fa-2x fa-cog float-right"
                     onClick={() => setWidget(widget)}></i>}

                  {
                    widget.type === "HEADING" &&

                    <HeadingWidget
                        className="dy-widget"
                        editing={selectedWidget.id === widget.id}
                        setWidget={setWidget}
                        widget={widget}
                        update={updateWidget}
                        deleteWidget={deleteWidget}
                    />
                  }

                  {
                    widget.type === "PARAGRAPH" &&
                    <ParagraphWidget
                        className="dy-widget"
                        editing={selectedWidget.id === widget.id}
                        setWidget={setWidget}
                        widget={widget}
                        update={updateWidget}
                        deleteWidget={deleteWidget}/>
                  }

                  {
                    widget.type === "LIST" &&
                    <ListWidget
                        editing={selectedWidget.id === widget.id}
                        setWidget={setWidget}
                        widget={widget}
                        update={updateWidget}
                        deleteWidget={deleteWidget}/>
                  }

                  {
                    widget.type === "IMAGE" &&
                    <ImageWidget
                        editing={selectedWidget.id === widget.id}
                        setWidget={setWidget}
                        widget={widget}
                        update={updateWidget}
                        deleteWidget={deleteWidget}/>
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
  findWidgetsForTopics: (topicId) => widgetActions.findWidgetsForTopics(
      dispatch, topicId),
  createWidgetsForTopic: (topicId) => widgetActions.createWidgetsForTopic(
      dispatch, topicId),
  deleteWidget: (wid) => widgetActions.deleteWidget(dispatch, wid),
  updateWidget: (wid, widget) => widgetActions.updateWidget(dispatch, wid,
      widget)
})

export default connect(stateToPropsMapper, dispatchPropsMapper)(WidgetList)