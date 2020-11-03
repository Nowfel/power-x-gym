import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGa from "react-ga";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  useEffect(() => {
    ReactGa.initialize("UA-168457671-1");

    ReactGa.pageview(window.location.pathname);
  }, []);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
