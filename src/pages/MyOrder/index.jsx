import React from "react";
import Layout from "../../components/layout"
import { Link } from "react-router-dom";
import { ShoppingCartContext } from '../../Context/index'
import OrderCard from "../../components/OrderCard";
import { ChevronRightIcon } from '@heroicons/react/24/solid'

function MyOrder() {
  const { order } = React.useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  const index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  console.log(index)

  const lastCard = () => {
    if (index !== 'last') {
      return(
        <div className="flex flex-col w-80">
                {
                    order?.[index].products.map((product, index) => (
                        <OrderCard
                            key={index}
                            indice={index}
                            id={product.id} 
                            title={product.title}
                            imageURL={product.images}
                            price={product.price}
                        />
                    ))
                }
            </div>
      );
    } else {
      return(
        <div className="flex flex-col w-80">
                {
                    order?.slice(-1)[0].products.map((product, index) => (
                        <OrderCard
                            key={index}
                            indice={index}
                            id={product.id} 
                            title={product.title}
                            imageURL={product.images}
                            price={product.price}
                        />
                    ))
                }
            </div>
      );
    }
  }

    return (
      <>
        <Layout>
          <div className="flex items-center justify-center relative w-80">
            <Link to="/my-orders" className="absolute left-0">
              <ChevronRightIcon className="h-6 w-6 text-black" />
            </Link>
            <h1>My Orders</h1>
          </div>
          <div className="flex flex-col w-80">
                {
                  lastCard()
                }
            </div>
        </Layout>
      </>
    )
  }
  
  export default MyOrder