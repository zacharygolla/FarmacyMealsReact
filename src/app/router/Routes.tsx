import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Cart from '../components/cart/layout/cart';
import Home from '../components/home/Home';
import Login from '../components/login/Login';
import Menu from '../components/menu/layout/Menu';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {path: '', element: <Home/>},
            {path: 'menu', element: <Menu/>},
            {path: 'login', element: <Login/>},
            {path: 'cart', element: <Cart/>}
        ]
    }
])