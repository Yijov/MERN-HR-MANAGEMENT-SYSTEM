import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./HomePage";
import EmployeesPage from "./EmployeesPage";
import DepartmentsPage from "./DepartmentsPage";
import NavbarComponent from "./components/NavbarComponent";
import AboutPage from "./AboutPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />

        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route path="/employees" component={EmployeesPage} />

          <Route path="/departments" component={DepartmentsPage} />

          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
