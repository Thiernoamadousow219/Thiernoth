import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import {CartItemContainers,ShoppingIcon,ItemCount}  from './cart-icon.styles';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, countCart} = useContext(CartContext);
    const toggleOpenCart = () => {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <CartItemContainers onClick={toggleOpenCart}>
            <ShoppingIcon/>
            <ItemCount>{countCart}</ItemCount>
        </CartItemContainers>
    )
}

export default CartIcon;