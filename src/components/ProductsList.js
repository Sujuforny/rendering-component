import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProductsList() {
    const [data,setdata]=useState([]);
    const product = document.querySelector('.product');
    useEffect(()=>{
        fetch("https://api.escuelajs.co/api/v1/products").then(item=> item.json()).then(data => setdata(data))
    },[])
    
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data[0].images[0]}/>
      <Card.Body>
        <Card.Title>{data[0]?.title || "Empty"}</Card.Title>
        <Card.Text>
           {data[0]?.description || "Empty"}
        </Card.Text>
        <p>${data[0].price}</p>
        <Button variant="primary me-5">Add to card</Button>
        <Button variant="primary ms-3">Buy</Button>
      </Card.Body>
    </Card>
  )
}
