import { useRoutes, BrowserRouter } from 'react-router-dom'; // libreria para configuracion de routers
import { ShoppingCartProvider } from '../../Context';
import Home from '../home';
import MyAccount from '../MyAccount';
import MyOrders from '../MyOrders';
import MyOrder from '../MyOrders';
import SignIn from '../SignIn';
import NotFound from '../NotFound';
import Navbar from '../../components/Navbar';
import CheckoutSideMenu from '../../components/CheckoutSideMenu'
import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element:<Home /> },
    { path:'/my-orders', element:<MyOrders/>},
    { path:'/my-order', element:<MyOrder/>},
    { path:'/my-account', element:<MyAccount/>},
    { path:'/SignIn', element:<SignIn/>},
    { path:'/*', element:<NotFound/>},
  ])
  return routes;
}


function App() {
  
  return (
    // el browserRouter permite hacer el routeo a traves de la funcion de AppRoutes, que tiene programado el hook useRoutes
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
    </BrowserRouter>
    </ShoppingCartProvider>  
  )
}

export default App
