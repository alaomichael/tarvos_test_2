import React, { Fragment, useState,useEffect } from 'react';
import data from './data';
import List from './List';
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/Nav";
// PAGES
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Contact from "./pages/Contact/ContactPage";
import CheckOut from "./pages/CheckOut/CheckOutPage";
import Details from "./pages/Details/DetailsPage";

//import "./index.css";
function App() {
 

    const [product,setProduct] = useState(data);
    const [count, setCount] = useState(0);
// Load the Item clicked
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = product.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

    return (
    <Fragment>
    <div>
    <div className="container">
      <Route exact={true} path="/" component={Home} />
      <Route exaxt path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/checkout" component={CheckOut} />
      <Route exact path="/details" component={Details} />
    </div>
  </div>
  <Navigation />
  <main className='container'>
  <section >
  <h3>{product.length} Available today</h3>
  <List product={product} onClick={() => setCount(newcount + 1)}/>
  <button onClick={() => setProduct([])}>clear all</button>
  </section>
  </main>
  </Fragment>
   );
}

export default App;
