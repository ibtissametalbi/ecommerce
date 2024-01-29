import React from 'react';

function ProductList() {
    import React, { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';
    
    function ProductList() {
        const [products, setProducts] = useState([]);
    
        useEffect(() => {
            fetch('/path/to/produits.json')
                .then(response => response.json())
                .then(data => setProducts(data));
        }, []);
    
        return (
            <div>
                {products.map(product => (
                    <div key={product.id}>
                        <h3>{product.designation}</h3>
                        <img src={product.img} alt={product.designation} />
                        <p>Prix: {product.price}</p>
                        <Link to={/ProductDetail/${product.id}}>Voir les détails</Link>
                        {/* Vous pouvez ajouter un bouton pour ajouter au panier ici */}
                    </div>
                ))}
            </div>
        );
    }
    
    export default ProductList;}

export default ProductList;