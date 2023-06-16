import './checkout.styles.scss';
import { CartContext } from '../../components/contexts/cart.context';
import { useContext } from 'react';

const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    console.log(cartItems);
    return (
        
        <div>
            <h1> Je suis la page Checkout. </h1>
        </div>
    )
}

export default Checkout;