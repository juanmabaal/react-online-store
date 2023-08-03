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
    const [filteredItems, setFilteredItems] = useState(null)

    //Get Products by tittle
    const [searchByTittle, setSearchByTittle] = useState(null)

    //Get Products by Category
    const [searchByCategory, setSearchByCategory] = useState(null)
    
    
    useEffect(()=> {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    },[])
    
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      }


    const filteredItemsByCategory = (items, searchByCategory) => {        
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
      }

      const filterBy = (searchType, items, searchByTittle, searchByCategory) => {
        if (searchType === 'BY_TITTLE') {
            return  filteredItemsByTitle(items, searchByTittle)
        }

        if (searchType === 'BY_CATEGORY') {
            return  filteredItemsByCategory(items, searchByCategory)
        }

        if (searchType === 'BY_TITTLE_AND_CATEGORY') {
            return  filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTittle.toLowerCase()))
        }

        if (!searchType) {
            return  items
        }
      }

    useEffect(()=> {
        if(searchByTittle && searchByCategory ) setFilteredItems(filterBy('BY_TITTLE_AND_CATEGORY',items, searchByTittle, searchByCategory))
        if(searchByTittle && !searchByCategory ) setFilteredItems(filterBy('BY_TITTLE',items, searchByTittle, searchByCategory))
        if(!searchByTittle && searchByCategory ) setFilteredItems(filterBy('BY_CATEGORY',items, searchByTittle, searchByCategory))
        if(!searchByTittle && !searchByCategory ) setFilteredItems(filterBy(null,items, searchByTittle, searchByCategory))
    },[items, searchByTittle, searchByCategory])

    console.log('filtered Items: ', filteredItems)

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
            setSearchByTittle,
            filteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
};

