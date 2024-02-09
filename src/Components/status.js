import React from "react";
import './Dashboard.css';
import { useState } from "react";
import Sample from "./sample";


function Status(){
    let productData = [
        { id: 1, name: 'hk1', category: 'Cleaning' },
        { id: 2, name: 'hk2', category: 'Cleaning' },
        { id: 3, name: 'hk3', category: 'mopping' },
        { id: 4, name: 'hk4', category: 'dusting' },
        { id: 5, name: 'hk5', category: 'dusting' },
      ];
    
      const [category, setCategory] = useState('');
    
      const [productsArray, setProductsArray] = useState(productData);
    
    
      const handleCategoryChange = (event) => {
        setCategory(event.target.value);
      };
    
      let filteredProducts =
        category === ''
          ? productsArray
          : productsArray.filter((product) => product.category === category);
    return(
        <>
        <div className="products-container" >
        <h2 align="center">service Based on Category</h2>
      <hr />
      <div style={{marginLeft:"500px"}}>
      <label >
       <h5>Select Category:</h5> 
        <select style={{backgroundColor:"#1512cc",padding:"10px",borderRadius:"5px",color:"white"}} value={category} onChange={handleCategoryChange}>
          <option style={{backgroundColor:"#444447"}} value="">All services</option>
          <option style={{backgroundColor:"#444447"}} value="Cleaning">cleaning</option>
          <option style={{backgroundColor:"#444447"}} value="dusting">Dusting</option>
          <option style={{backgroundColor:"#444447"}} value="mopping">Mopping</option>
        </select>
      </label></div>
      
      
      <h3 align="center">{category === '' ? 'All services' : category}</h3>
      {filteredProducts.map((item) => (
        <Sample key={item.id}  productObj={item} />
      ))}
    </div>
        </>
    );
}

export default Status;