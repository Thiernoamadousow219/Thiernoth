import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { CartContext } from '../contexts/cart.context';
import './cart-dropdown.styles.scss';
import Button from "../button/button.component";
import CartItem from '../cart-item/cart-item.component';



const CartDropdown = () => {

  const navigate = useNavigate();

  const checkout = () => {
    navigate('/checkout');
  }

    const { cartItems } = useContext(CartContext);
  
    return (
      <div className='cart-dropdown-container'>
        <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Votre panier est vide</span>
        )}
          
        </div>
        <Button onClick={checkout} >GO TO CHECKOUT</Button>
      </div>
    );
  };
  
  export default CartDropdown;