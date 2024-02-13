import { useSelector } from 'react-redux';
import { RootState } from '../../../models/RootState';
import FoodRow from '../foodrow/FoodRow';
import MenuHeader from '../menuHeader/MenuHeader';
import './Menu.css'

function Menu() {
  const menuData = useSelector((state: RootState) => state.menu.menuData);

  if (!menuData) {
    return <div>Loading...</div>; // or any loading indicator
  }
  
  return (
      <>
        <div>
          <MenuHeader/>      
          {Object.entries(menuData).map(([category, categoryFoods]) => (
            <FoodRow key={category} category={category} categoryFoods={categoryFoods} />
          ))}
        </div>
      </>
  );
}

export default Menu

