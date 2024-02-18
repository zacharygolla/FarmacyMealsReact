import { CssBaseline } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { map } from 'rxjs';
import { setMenuData } from './actions/menuActions';
import Navbar from './components/shared/navbar/Navbar';
import { fetchMenuData } from './services/MenuService';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Function to fetch data when the component mounts
    const fetchDataOnLoad = async () => {
      try {
        fetchMenuData().pipe(map(response => {
          return response.data.reduce((acc: { [x: string]: any; }, food: { foodId: string; }) => {
            const { foodId } = food;
            if (!acc[foodId]) 
              acc[foodId] = null;        
            acc[foodId] = food;
            return acc;
          }, {});
        })).subscribe((response) => {
          dispatch(setMenuData(response));
        })
        // Dispatch an action to store the fetched data in the Redux store        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    // Call the function to fetch data
    fetchDataOnLoad();
  }, [dispatch]);
  
  return (
      <CssBaseline>
      <Navbar/>
      <Outlet/>
      </CssBaseline>
  );
};

export default App;