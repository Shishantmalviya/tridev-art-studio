import React, { useEffect, useState } from "react";

const products = [
  {
    name : "Product 1",
    price : 1299,
    imageUrl : '/img1.jpg',
    description : 'which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'
  },
  {
    name : "Product 1",
    price : 1299,
    imageUrl : '',
    description : 'which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'
  },
  {
    name : "Product 1",
    price : 1299,
    imageUrl : '',
    description : 'which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'
  },
  {
    name : "Product 1",
    price : 1299,
    imageUrl : '',
    description : 'which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'
  },
  {
    name : "Product 1",
    price : 1299,
    imageUrl : '',
    description : 'which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'
  }
]
const ProductList = () => {
  
  return (
    <div className="flex bg-white flex-col flex-grow rounded-md gap-2 font-normal p-4">
      {
        products.map((item,index)=>(
          <div className="flex flex-col w-full h-fit  bg-slate-300 p-4 rounded-lg gap-3" key={index}>
            <h1>Name : {item.name}</h1>
            <p>Price : {item.price}</p>
            <p>Description : {item.description}</p>
          </div>
        ))
      }
    </div>
  );
};

export default ProductList;
