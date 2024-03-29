import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "antd/dist/antd.css";

import Home from "./pages/Home";
import Post from "./pages/Post";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/post/:postId" component={Post} />
      <Route exact path="/about" component={About} />
    </Router>
  );
}

export default App;
