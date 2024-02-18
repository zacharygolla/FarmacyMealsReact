// Action type constant
export const SET_MENU_DATA = 'menu/setMenuData';

// Action creator function
export const setMenuData = (menuData: any) => ({
  type: SET_MENU_DATA,
  payload: menuData,
});