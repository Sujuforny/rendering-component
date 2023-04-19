import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Buttons from './Buttons';

export default function ProductsList() {
    const [data,setdata]=useState([]);
    const product = document.querySelector('.product');
    useEffect(()=>{
        fetch("https://api.escuelajs.co/api/v1/products").then(item=> item.json()).then(data => setdata(data))
    },[])
  return (
      <>
      {data.map((product) => (
          <Card style={{ width: '18rem' }} className="m-4">
            <Card.Img variant="top" src={product.images}/>
              <Card.Body>
                <Card.Title>{product?.title || "Empty"}</Card.Title>
                <Card.Text>
                  {product.description || "Empty"}
                </Card.Text>
                <p>${product.price}</p>
                <Buttons/>
              </Card.Body>
        </Card>
        ))}
      </>
  )
}
