import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id == productToAdd.id);

    if (existingCartItem) {
        return (cartItems.map((cartItem) =>
            cartItem.id == productToAdd.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ));

    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => {},
    cartItems: [],
    addItemCart: () => {},
    countCart : 0
});

export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems]   = useState([]);
    const [countCart , setCountCart]  = useState(0);

    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem (cartItems, productToAdd) );
    }

    useEffect(() => {

        const newCountCart = cartItems.reduce((total, cartItem) => total + cartItem.quantity,0);
        setCountCart(newCountCart);
    }, [cartItems]);

    const value = {isCartOpen, setIsCartOpen , addItemToCart , cartItems, countCart};
    return (
        <CartContext.Provider value={value}> {children} </CartContext.Provider>
    )
};