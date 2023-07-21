import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    //Shopping Cart - Increment quantify
    const [count, setCount] = useState(0);

    //Product Detail - Opne/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const toggleProductDetail = () => {
        setIsProductDetailOpen(!isProductDetailOpen)
    }

    //Product Detail -Show Product
    const [productToShow, setProductToShow] = useState({});

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            toggleProductDetail,
            setIsProductDetailOpen,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
};

