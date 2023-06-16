import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return (cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ));

    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const ReductionItem = (cartItems, removeToItem) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === removeToItem.id);

    if (existingCartItem.quantity === 1) {
        return (
         cartItems.filter((cartItem) => cartItem.id !==  removeToItem.id)
        );

    }
    return (cartItems.map((cartItem) =>
            cartItem.id === removeToItem.id 
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ));
}

const removeItemToCartContent = (cartItems, removeToItem ) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === removeToItem.id);
    if (existingCartItem) {
        return (
         cartItems.filter((cartItem) => cartItem.id !==  removeToItem.id)
        );

    }
    return (cartItems.map((cartItem) =>
            cartItem.id === removeToItem.id 
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ));
}

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => {},
    cartItems: [],
    addItemCart: () => {},
    reductionCart : () => {},
    removeItemCart : () => {},
    countCart : 0,
    totalCart : 0
});

export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems]   = useState([]);
    const [countCart , setCountCart]  = useState(0);
    const [totalCart , setTotalCart]  = useState(0);

    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem (cartItems, productToAdd) );
    }
    const removeItemToCart = (removeToItem) => {
        setCartItems(removeItemToCartContent (cartItems, removeToItem) );
    }
    const reductionItemToCart = (removeToItem) => {
        setCartItems(ReductionItem (cartItems, removeToItem) );
    }

    useEffect(() => {

        const newCountCart = cartItems.reduce((total, cartItem) => total + cartItem.quantity,0);
        setCountCart(newCountCart);
    }, [cartItems]);
    useEffect(() => {

        const totalCart = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price,0);
        setTotalCart(totalCart);
    }, [cartItems]);

    const value = {isCartOpen,
        setIsCartOpen , 
        addItemToCart ,
         cartItems,
         countCart,
         totalCart,
        removeItemToCart,
        reductionItemToCart
    };
    return (
        <CartContext.Provider value={value}> {children} </CartContext.Provider>
    )
};