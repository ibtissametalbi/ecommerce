import React from 'react';

function ProductDetail() {
    import React, { useState, useEffect } from 'react';
    import { useParams } from 'react-router-dom';
    
    function ProductDetail() {
        const { id } = useParams(); // Récupère l'ID du produit à partir de l'URL
        const [product, setProduct] = useState(null);
    
        useEffect(() => {
            // Supposons que vous ayez une fonction 'fetchProduct' qui récupère les détails du produit
            // par son ID. Vous pourriez appeler une API ici.
            fetchProduct(id).then(data => {
                setProduct(data);
            });
        }, [id]);
    
        const fetchProduct = async (productId) => {
            // Remplacez cette partie par une requête API réelle
            const response = await fetch(/path/to/your/products/api/${productId});
            return await response.json();
        };
    
        if (!product) {
            return <div>Chargement...</div>;
        }
    
        return (
            <div>
                <h2>{product.designation}</h2>
                <img src={product.img} alt={product.designation} />
                <p>Prix: {product.price}</p>
                {/* Autres détails du produit */}
            </div>
        );
    }
    
    export default ProductDetail;}

export default ProductDetail;