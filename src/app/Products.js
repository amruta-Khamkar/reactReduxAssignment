import React, { Component, useState, useEffect } from 'react'
import { connect, useDispatch,useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { height } from 'dom-helpers';
import json from './products.json'



function Product() {
  
    // alert(proData)
    const dispatch=useDispatch();
   
    return (
        <div>
            <Container fluid>
                {json.Products.map(json =>
                    <div key={Math.random()} className="card-body block mx-3 my-4" style={{ display: "inline-block", width: "290px", height: '400px', border: "2px solid grey", boxShadow: "2px 2px 1px 2px" }}>
                        <img key={Math.random()} className="card-img-top imgs" height=" 250px" width="200px" src={json.imgsrc} alt=" "></img>
                        <h4 key={Math.random()} className="card-title">{json.ProductName}</h4>
                        <div key={Math.random()} className="card-text">
                            Price : <span style={{ color: "red", fontSize: "large", fontWeight: "bold" }}>Rs. {json.Price}</span><br />
                            Quantity : <span style={{ color: "red", fontSize: "large", fontWeight: "bold" }}> {json.Quantity}</span><br />


                        </div>
                        <button onClick={() => dispatch({type:"add",id:json.id})} className="btn btn-primary">Add To Cart</button>
                    </div>
                )}

                 <h1  style={{ textAlign: "center" }}>Want to clear the cart? click below</h1>
                <button className="bg-danger text-white rounded btns my-1"  onClick={() => dispatch({type:"emp"})}>Empty Cart</button> 
            </Container>
        </div>
    )
}


export default Product;