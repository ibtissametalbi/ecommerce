import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Products from "../produit.json"

function ProductList() {
        const [products, setProducts] = useState([]);
    
        useEffect(() => {
            fetch('/path/to/produits.json')
                .then(response => response.json())
                .then(data => setProducts(data));
        }, []);
    
        return (
            <div className='container-fluid row'>
                
                {Products.map(product => (
                    // <div key={product.id}>
                    //     <h3>{product.designation}</h3>
                    //     <img src={product.img} alt={product.designation} />
                    //     <p>Prix: {product.price}</p>
                    //     <Link to={`/ProductDetail/${product.id}`}>Voir les détails</Link>
                    //     {/* Vous pouvez ajouter un bouton pour ajouter au panier ici */}
                    // </div>
                    <div className='col-12 col-md-3 col-lg-3 mt-3'>
                        <div className="card">
                          <img src={`./images/${product.img}`} className="card-img-top" alt="..."/>
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                          </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
export default ProductList