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
        // Call your data service to fetch the data
        fetchMenuData().pipe(map(response => {
          return response.data.reduce((acc: { [x: string]: any[]; }, food: { category: string; }) => {
            const { category } = food;
            // If the category is not in the dictionary, add it with an empty array
            if (!acc[category]) 
              acc[category] = [];        
            // Push the current food object to the corresponding category array
            acc[category].push(food);
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