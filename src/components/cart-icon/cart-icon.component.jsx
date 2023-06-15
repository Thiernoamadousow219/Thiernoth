import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../contexts/cart.context";
import './cart-icon.styles.scss';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen,countCart} = useContext(CartContext);
    const toggleOpenCart = () => {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <div className="cart-icon-container" onClick={toggleOpenCart}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{countCart}</span>
        </div>
    )
}

export default CartIcon;