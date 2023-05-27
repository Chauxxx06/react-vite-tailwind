import React from "react";
import Layout from "../../components/layout";
import Card from "../../components/Card";
import ProductDetail from '../../components/ProductDetails';
import { ShoppingCartContext } from '../../Context/index'

function Home() {
  const { items,
          searchByTitle,
          filteredItems,
          setSearchByTitle } = React.useContext(ShoppingCartContext);
  
  const renderView = (items, filteredItems) => {
    if(searchByTitle?.length > 0) {
      return(
          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {
              filteredItems?.map( item => <Card key={item.id} data={item}/> )
            }
        </div>
      )
    } else {
      return(
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {
              items?.map( item => <Card key={item.id} data={item}/> )
            }
        </div>
      )
    }
  }

    return (
      <>
        <Layout>
          <div className="flex items-center justify-center relative w-80">
            <h1 className="font-medium text-xl mb-4">Exclusive Products</h1>
          </div>
          <input 
            type="text" 
            placeholder="Search your product!" 
            className="rounded-lg border-black w-80 p-4 mb-6"
            onChange={(event) => setSearchByTitle(event.target.value)}
            />
          {
            renderView(items, filteredItems)
          }
          <ProductDetail />
        </Layout>
      </>
    )
  }
  
  export default Home