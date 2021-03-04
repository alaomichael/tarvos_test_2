import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// NAVIGATION
import Nav from "./components/Nav";
// PAGES
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Contact from "./pages/Contact/ContactPage";
import CheckOut from "./pages/CheckOut/CheckOutPage";
import Details from "./pages/Details/DetailsPage";

import "./index.css";

const App = () => (
  <div>
      <div className="container">
  <Route exact={true} path="/" component={Home} />
      <Route exaxt path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/checkout" component={CheckOut} />
      <Route exact path="/details" component={Details} /> 
    </div>
  </div>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
