import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import {ReactComponent as Crown} from '../../assets/crown.svg';
import { UserContext } from "../../components/contexts/user.context";
import { CartContext } from "../../components/contexts/cart.context";
import { signOutUser } from "../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {NavigationContainer,NavLink,NavLinks,LogoContainer} from "./navigation.styles";

const Navigation = () => {
    const {currentUser,setCurrentUser}  = useContext(UserContext);
    const {isCartOpen, setIsCartOpen}   = useContext(CartContext);
    console.log(setIsCartOpen)

    const signOutHandler = async() => {
       await signOutUser();
       setCurrentUser(null);
    }   

    return (
        <Fragment>
          <NavigationContainer>
            <LogoContainer to=''>
                <Crown/>
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>
                    Shop
                </NavLink>
                {
                    currentUser ? (
                    <NavLink as="span" onClick={signOutHandler}>
                        Sign Out
                        </NavLink>) :
                    (<NavLink to="/auth">
                    Sign In
                </NavLink>)
                }
                <CartIcon/>
            </NavLinks>
            {
                isCartOpen && <CartDropdown/>
            }
          </NavigationContainer>
          <Outlet/>
        </Fragment>
      
    );
}

export default Navigation;