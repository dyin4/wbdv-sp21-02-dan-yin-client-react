import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import moduleReducer from "./reducer/modules-reducer";
import lessonReducer from "./reducer/lesson-reducer";
import topicReducer from "./reducer/topic-reducer";
import widgetReducer from "./reducer/widget-reducer";
import quizReducer from "./reducer/quiz-reducer";


const reducer = combineReducers({
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer,
  topicReducer : topicReducer,
  widgetReducer : widgetReducer,
  quizReducer: quizReducer,
})

// const store = createStore(moduleReducer)
const store = createStore(reducer)


ReactDOM.render(

    <Provider store={store}>
    <App/>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
