import React, { Fragment,useEffect,useState } from "react";
import Navigation from '../../components/Nav';
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai';
import data from '../../data';
import List from '../../List';


const DetailsPage  = ({count}) => {
  const [product,setProduct] = useState(data);
const [newcount,setCount] = useState(0);
const [url,setURL] = useState('');



useEffect(
()=> {
  console.log(data[3]);
setURL(url)},
[url]
)
  
  return (
    <Fragment>
<Navigation />
      {product && product.map((product) => {
        let {id,name,pack,price,image,like,sizes} = product;
        /* image = `href="${image}"` */
        return(
          <Fragment>  
        <article key={id} className=''>
      <img src={image} alt={name} className='product' />
        <h3 className="price">{name}</h3>
       {like ? <AiFillHeart  className="icon"  /> : <AiOutlineHeart className="icon"  />}
        <div className="containflex"> <b>N {price} </b> <p className="pack">Pack of {pack} </p>
        </div>
        <div id="row">
        {sizes[0] ? <div id="one" className="size">{sizes[0]}</div> : ''}
        {sizes[1] ? <div id="two" className="size">{sizes[1]}</div> : ''}
        {sizes[2] ? <div id="three" className="size">{sizes[2]}</div> : ''}
        </div>          
           </article> 
           <button onClick={()=> setCount(newcount + 1)}> Click Me </button>
           <div >Clicked {newcount}</div>

      {/*      <button onClick={()=>setURL('https://xghel.csb.app')}> Goto Home </button>
       */}   
          </Fragment>
        );
      } )}
    </Fragment>
  );
};

export default DetailsPage;