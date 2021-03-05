import React, { useState,Fragment} from 'react';
import data from '../../data';
import List from '../../List';
import Navigation from '../../components/Nav';

import "../../index.css";
function HomePage({count}) {
 
  
const [product,setProduct] = useState(data);
const [newcount,setCount] = useState(0);

return (
    <Fragment>
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

export default HomePage;

