import React from "react";
import Layout from "../../components/layout"
import { Link } from "react-router-dom";
import OrdersCards from "../../components/OrdersCards"
import { ShoppingCartContext } from '../../Context'

function MyOrders() {
  const { order } = React.useContext(ShoppingCartContext);
    return (
      <>
        <Layout>
          <div className="flex items-center justify-center relative w-80">
            <h1>My Orders</h1>
          </div>
          {
            order.map((order, index) => 
              (<Link key={index} to={`/my-orders/${index}`}>
                <OrdersCards 
                  totalPrice={order.totalPrice}
                  totalProduct={order.totalProduct}
                />
              </Link>)
            )
          }
        </Layout>
      </>
    )
  }
  
  export default MyOrders