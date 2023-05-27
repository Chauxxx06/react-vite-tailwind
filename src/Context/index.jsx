import { createContext, useState } from "react";
import { useEffect } from 'react';

const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
const ShoppingCartProvider = ({children}) => {
    // Get Products from API
    const [items, setItems] = useState(null) // el state es para almacenar la informacion que viene de la API
                                          // el setItem guarda la informacion que viene de la API y it em es la variable que tiene la informacion
    useEffect(() => {
        //fetch('https://young-sands-07814.herokuapp.com/api/products?limit=30&offset=0')
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    },[])

    // Shopping Card
    const [count, setCount] = useState(0)
    // Product Details - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)  
    const openProductDetail = () => { setIsProductDetailOpen(true) }
    const closeProductDetail = () => { setIsProductDetailOpen(false) }
    // Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({})
    //shopping card
    const [cartProducts, setCartProducts] = useState([])
    //Checkout side menu
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)  
    const openCheckoutSideMenu = () => { setIsCheckoutSideMenuOpen(true) }
    const closeCheckoutSideMenu = () => { setIsCheckoutSideMenuOpen(false) }
    // shopping cart - Orders
    const [order, setOrder] = useState([])
    // search by title
    const [searchByTitle, setSearchByTitle] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase())) // el simbolo ? representa si hay algo en items no si no haga nada
      }

    // este useEffect se renderiza ante cambios de las variables items o searchByTitle
    useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
      }, [items, searchByTitle])

    const [category, setCategory] = useState(null)
    
    const filteredByCategory = (items, category) => {
        if(category){
          return items.filter(item => item.category.name.toLowerCase() === category);
        } else {
          return items;
        }
      }
    
    useEffect(() => {
        const currentPath = window.location.pathname;
        setCategory(currentPath.substring(currentPath.lastIndexOf('/') + 1));
        console.log(category)
      },[category]);

    return (
        <ShoppingCartContext.Provider
            value={{
                count, 
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isCheckoutSideMenuOpen,
                setIsCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                order,
                setOrder,
                items, 
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
                filteredByCategory
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
}

export { ShoppingCartContext, ShoppingCartProvider}