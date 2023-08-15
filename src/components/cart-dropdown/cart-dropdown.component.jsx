import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { CartContext } from '../contexts/cart.context';
import {CartDropdownContainer,CartItems,EmptyMessage} from './cart-dropdown.styles';
import Button from "../button/button.component";
import CartItem from '../cart-item/cart-item.component';



const CartDropdown = () => {

  const navigate = useNavigate();

  const checkout = () => {
    navigate('/checkout');
  }

    const { cartItems } = useContext(CartContext);
  
    return (
      <CartDropdownContainer>
        <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Votre panier est vide</EmptyMessage>
        )}
          
        </CartItems>
        <Button onClick={checkout} >GO TO CHECKOUT</Button>
      </CartDropdownContainer>
    );
  };
  
  export default CartDropdown;