import React, { useState } from 'react';
import CartIcon from '../assets/Cart.svg';
import SweetAlert from 'react-bootstrap-sweetalert';
import Swal from 'sweetalert2';

const CartWidget = ({ cartItems }) => {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    if (cartItems.length === 0) {
      Swal.fire({
        icon: 'info',
        title: 'Carrito vacío',
        text: 'No hay productos en el carrito.',
        confirmButtonText: 'Aceptar'
      });
    } else {
      setShowCart(!showCart);
    }
  };

  return (
    <div className='flex items-center' onClick={handleCartClick}>
      <img src={CartIcon} alt="Cart" style={{ width: '24px', height: '24px', cursor: 'pointer' }} />
      {showCart && (
        <SweetAlert
          title="Productos en el carrito"
          onConfirm={() => setShowCart(false)}
          confirmBtnText="Aceptar"
          showCancel={false}
        >
          {cartItems.map((item, index) => (
            <div key={index}>
              <p>{item.nombre} - Cantidad: {item.cantidad}</p>
            </div>
          ))}
          <button className="btn btn-primary">Comprar ahora</button>
        </SweetAlert>
      )}
    </div>
  );
};

export default CartWidget;
