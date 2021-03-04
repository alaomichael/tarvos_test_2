import React, { Fragment } from 'react';

import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai';

const List = ({product}) => {
  return (
    <Fragment>
      {product.map((product) => {
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
           
         
          </Fragment>
        );
      } )}
    </Fragment>
  );
};

export default List;
