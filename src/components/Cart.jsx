import React from 'react';

const Cart = ({ cartItems, onClose, onBuyNow }) => {
  return (
    <div className='cart-modal'>
      <div className='cart-content'>
        <span className='close' onClick={onClose}>&times;</span>
        <h2>Carrito</h2>
        {cartItems.length === 0 ? (
          <p>No hay elementos en el carrito</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.nombre} - Cantidad: {item.cantidad}
              </li>
            ))}
          </ul>
        )}
        <button onClick={onBuyNow}>Comprar ahora</button>
      </div>
    </div>
  );
};

export default Cart;