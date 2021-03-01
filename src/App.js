import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./containers/Auth/Auth";
import Quiz from "./containers/Quiz/Quiz";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import Layout from "./hoc/Layout/Layout";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/auth" components={Auth} />
          <Route path="/quiz-creator" components={QuizCreator} />
          <Route path="/quiz/:id" components={Quiz} />
          <Route path="/" components={QuizList} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
