import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginCard from "./Component/LoginCard/LoginCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PeopleChat, AllChat } from "./Component/ChatList/ChatList";
import { Register } from "./Component/Register/RegisterPage";
const App: React.FC = () => {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Switch>
      <Route path="/login">
          <LoginCard />
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/">
          <AllChat/>
        </Route>
        
    
      </Switch>
    </Router>
  );
};

export default App;
