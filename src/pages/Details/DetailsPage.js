import React, { Fragment } from "react";
import Navigation from '../../components/Nav';
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai';

const DetailsPage  = ({count,product}) => {
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
        <div className="price"><b>N {price}</b> <p className="pack">Pack of {pack} </p>
        </div>
        <div id="row">
        <div id="one" className="size">{sizes[0]}</div>  
        <div id="two" className="size">{sizes[1]}</div>  
        <div id="three" className="size">{sizes[2]}</div>  
        </div>          
           </article> 
           
           <div>Clicked {count}</div>
         
          </Fragment>
        );
      } )}
    </Fragment>
  );
};

export default DetailsPage;