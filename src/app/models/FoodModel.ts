export interface FoodModel {
    foodId: string;
    name: string;
    price: number;
    category: string;
    description: string;
    imagePath: string;
    iconPath: string;
  }

  export interface MenuState {
    menuData: { [category: string]: FoodModel[] };
  }