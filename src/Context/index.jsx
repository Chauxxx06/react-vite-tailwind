import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
const ShoppingCartProvider = ({children}) => {
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
                closeCheckoutSideMenu
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
}

export { ShoppingCartContext, ShoppingCartProvider}