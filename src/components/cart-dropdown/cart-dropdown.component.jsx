import './cart-dropdown.styles.scss';
import Button from "../button/button.component";

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                <Button type="submit" buttonType={'inverted'}>GO TO CHECKOUT</Button>
            </div>
        </div>
    )
}

export default CartDropdown;