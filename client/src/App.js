import React from "react";
import "./css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import EmployeesPage from "./EmployeesPage";
import DepartmentsPage from "./DepartmentsPage";
import NavbarComponent from "./components/NavbarComponent";

import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={1000}>
              <Switch location={location}>
                <Route exact path="/" component={HomePage} />

                <Route path="/employees" component={EmployeesPage} />

                <Route path="/departments" component={DepartmentsPage} />

                <Route path="/about" component={AboutPage} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
}

export default App;
