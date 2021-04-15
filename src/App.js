import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
          <Route path="/" exact={true} component={Home}/>
          <Route path="/courses" component={CourseManager}/>
          <Route path="/courses/:courseId/quizzes" exact={true} render={(props) => <QuizzesList {...props}/>}/>
          <Route path="/courses/:courseId/quizzes/:quizId" exact={true} render={(props) => <Quiz{...props}/>}/>
          {/*<Route path="/editor" component={CourseEditor}/>*/}
          {/*<div className="container-fluid">*/}
          {/*  <CourseManager/>*/}
          {/*  <CourseEditor/>*/}
          {/*</div>*/}
        </div>
      </BrowserRouter>
  );
}

export default App;