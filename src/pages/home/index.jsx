import { useState, useEffect } from 'react';
import Layout from "../../components/layout";
import Card from "../../components/Card";
import ProductDetail from '../../components/ProductDetails';

function Home() {
  const [items, setItems] = useState(null) // el state es para almacenar la informacion que viene de la API
                                          // el setItem guarda la informacion que viene de la API y it em es la variable que tiene la informacion
  useEffect(() => {
    fetch('https://young-sands-07814.herokuapp.com/api/products?limit=30&offset=0')
    .then(response => response.json())
    .then(data => setItems(data))
  },[]); // se programa el useEffect para el llamado de la API, ya que la consulta puede tardar y se requiere que sea asincrono
        // Recordarf que el useEffect se ejecuta bajo ciertas condiciones de render y no todas las veces, es util para renderizar lo necesario y no tardar la nevgacion de la pagina

    return (
      <>
        <Layout>
        Home
          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {
              items?.map( item => <Card key={item.id} data={item}/> )
            }
          </div>
          <ProductDetail />
        </Layout>
      </>
    )
  }
  
  export default Home