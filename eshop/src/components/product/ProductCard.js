import React from 'react';
import { Link } from 'react-router-dom';



export default function ProductCard({product}) {

    
    return (
        <div className="card mb-3 align-items-center">

            <div className="view overlay">
            <img className="card-img-top imgStyle" src={product.image} alt="Product" />
                
            <Link to={`/products/${product._id}`}>
                <div onClick={product.id} className="mask rgba-white-slight"></div>
            </Link>
            </div>

            <div className="card-body text-center">
                <h4 className="card-title">{product.name}</h4>
                <p className="card-text">{product.short}</p>
                <p>{product.price} SEK</p>
               <Link to={`/products/${product._id}`}><button onClick={product.id} type="button" className="btn btn-dark btn-lg">Read more</button></Link>
            </div>
        </div>
    )
}
