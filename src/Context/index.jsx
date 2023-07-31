import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    //Shopping Cart - Increment quantify
    const [count, setCount] = useState(0);

    //Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const toggleProductDetail = () => {
        setIsProductDetailOpen(!isProductDetailOpen)
    }
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Product Detail -Show Product
    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images:[],
    });

    // Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const toggleCheckoutSideMenu = () => {
        setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen)
    } 
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //Shopping Cart - Add products to Card
    const [cartProducts, setCartProducts] = useState([]);

    //Shopping Cart - Order
    const [order, setOrder] = useState([]); 

    //Get Products
    const [items, setItems] = useState(null)

    //Get Products by tittle
    const [searchByTittle, setSearchByTittle] = useState(null)
    console.log('search By Tittle: ', searchByTittle)

    useEffect(()=> {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
      },[])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            toggleProductDetail,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            toggleCheckoutSideMenu,openCheckoutSideMenu, 
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTittle,
            setSearchByTittle
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
};

