import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/post/:post_id" component={Post} />
    </Router>
  );
}

export default App;
