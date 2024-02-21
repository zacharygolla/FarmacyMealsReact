import { CssBaseline } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { map } from 'rxjs';
import Navbar from './components/shared/navbar/Navbar';
import { fetchMenuData } from './services/MenuService';
import { setMenuData } from './slices/menuSlice';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataOnLoad = () => {
        fetchMenuData().pipe(
          map(response => {
            return response.data.reduce((acc: { [x: string]: any; }, food: { foodId: string; }) => {
              const { foodId } = food;
              if (!acc[foodId]) 
                acc[foodId] = null;        
              acc[foodId] = food;
              return acc;
            }, {});
          })
        ).subscribe((response) => {
          dispatch(setMenuData(response));
        });
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