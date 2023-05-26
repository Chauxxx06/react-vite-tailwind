import React from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { totalPrice } from "../utils";
import OrderCard from "../OrderCard";

import './styles.css'

const CheckoutSideMenu = () => {
    const { 
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        cartProducts,
        setCartProducts 
    } = React.useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filterProducts = cartProducts.filter((product) => product.id != id)
        setCartProducts(filterProducts)
    }

    return(
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border boder-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-xl p-6">Checkout</h2>
                <div onClick={() => closeCheckoutSideMenu()}>
                    <XMarkIcon className="h-6 w-6 text-black"/>
                </div>
            </div>
            <div className="px-6 overflow-y-scroll">
                {
                    cartProducts.map((product, index) => (
                        <OrderCard
                            key={index}
                            indice={index}
                            id={product.id} 
                            title={product.title}
                            imageURL={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className="px-6 ">
                <p className="flex justify-between items-center">
                    <span className="font-light">Total: </span>
                    <span className="font-medium text-2xl">$ {totalPrice(cartProducts)}</span>
                </p>
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;