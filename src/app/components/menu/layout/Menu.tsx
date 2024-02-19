import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FoodModel } from '../../../models/FoodModel';
import { RootState } from '../../../models/RootState';
import FoodRow from '../foodrow/FoodRow';
import MenuHeader from '../menuHeader/MenuHeader';
import './Menu.css'

const Menu: React.FC = () => {
  const menu = useSelector((state: RootState) => state.menu.menu);
  const [menuByCat, setMenuByCat] = useState<{ [category: string]: FoodModel[] }>();

  useEffect(() => {
    setMenuByCat(Object.values(menu).reduce((acc, curr): any => {
      const category = curr.category;
      if (acc[category]) {
          acc[category].push(curr);
      } else {
          acc[category] = [curr];
      }
      return acc;
    },{} as { [foodId: string]: FoodModel[] }));
  }, []);

  if (!menuByCat) {
    return <div>Loading...</div>; // or any loading indicator
  }
  
  return (
      <>
        <div>
          <MenuHeader/>      
          {Object.entries(menuByCat).map(([category, categoryFoods]) => (
            <FoodRow key={category} category={category} categoryFoods={categoryFoods} />
          ))}
        </div>
      </>
  );
}

export default Menu

