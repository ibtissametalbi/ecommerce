import React from 'react';
import { useSelector } from 'react-redux';

function Total() {
  // const cartItems = useSelector((state) => state.cart.items);
  // const total =calculateTotal(cartItems);

  return (
    <div className='col-12 col-md-1 col-lg-1'>
      <h3>Total: 
      {/* {total.toFixed(2)}€ */}
      </h3>
      {/* Vous pouvez ajouter plus de détails ici, comme les taxes et les frais d'expédition */}
    </div>
  );
}

export default Total;