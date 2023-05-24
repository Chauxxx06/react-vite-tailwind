import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    
    return (
        <ShoppingCartContext.Provider
            value={{
                count, 
                setCount,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
}

export { ShoppingCartContext, ShoppingCartProvider}