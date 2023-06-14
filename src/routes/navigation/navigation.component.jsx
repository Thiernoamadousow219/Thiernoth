import { Fragment, useContext } from "react";
import { Outlet,Link } from "react-router-dom";
import {ReactComponent as Crown} from '../../assets/crown.svg';
import './navigation.styles.scss';
import { UserContext } from "../../components/contexts/user.context";
import { CartContext } from "../../components/contexts/cart.context";
import { signOutUser } from "../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
    const {currentUser,setCurrentUser}  = useContext(UserContext);
    const {isCartOpen, setIsCartOpen}  = useContext(CartContext);
    console.log(currentUser);


    const signOutHandler = async() => {
       await signOutUser();
       setCurrentUser(null);
    }   
    return (
        <Fragment>
          <div className="navigation">
            <Link className="logo-container" to=''>
                <Crown/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    Shop
                </Link>
                {
                    currentUser ? (<span className="nav-link" onClick={signOutHandler}>
                    Sign Out
                        </span>) :
                    (<Link className="nav-link" to="/auth">
                    Sign In
                </Link>)
                }
                <CartIcon/>
            </div>
            {
                isCartOpen && <CartDropdown/>
            }
          </div>
          <Outlet/>
        </Fragment>
      
    );
}

export default Navigation;