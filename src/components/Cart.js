import React from 'react';

function Cart() {
// Ajouter un produit au panier
export const addToCart = (product) => {
    return {
      type: 'ADD_TO_CART',
      payload: product
    };
  };
  
  // Supprimer un produit du panier
export const removeFromCart = (productId) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: productId
    };
  };
  
  // Mettre à jour la quantité d'un produit dans le panier
export const updateQuantity = (productId, quantity) => {
    return {
      type: 'UPDATE_QUANTITY',
      payload: { productId, quantity }
    };
  };
}

export default Cart;