import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {
    const {name,price,imageUrl,quantity} = cartItem;
    const {addItemToCart, removeItemToCart, reductionItemToCart}  = useContext(CartContext);

    const Increment = () =>{
        addItemToCart(cartItem);
    } 
    const decrement = () => {
        reductionItemToCart(cartItem)
    }
    const clearItemToCart = () => {
        removeItemToCart(cartItem)
    }
    return (

        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
            <div className='arrow' onClick={decrement}>
                &#10094;
            </div>
                <span className='value'>{quantity}</span>
            <div className='arrow' onClick={Increment }>
                &#10095;
            </div>    
            </span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={clearItemToCart }>&#10005;</div>
        </div>
    )
}

export default CheckoutItem; 