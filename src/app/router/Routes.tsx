import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Cart from '../components/cart/layout/cart';
import Home from '../components/home/Home';
import Login from '../components/login/Login';
import Register from '../components/login/Register';
import Menu from '../components/menu/layout/Menu';
import Orders from '../components/orders/layout/Orders';
import Profile from '../components/profile/layout/Profile';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {path: '', element: <Home/>},
            {path: 'menu', element: <Menu/>},
            {path: 'login', element: <Login/>},
            {path: 'register', element: <Register/>},
            {path: 'cart', element: <Cart/>},
            {path: 'profile', element: <Profile/>},
            {path: 'orders', element: <Orders/>}
        ]
    }
])