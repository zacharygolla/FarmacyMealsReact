// menuService.js
import { defer, from } from 'rxjs';
import { get } from './ApiClient';

const MENU_ENDPOINT = '/Foods';

export const fetchMenuData = () => {
  return defer(() => from(get<any>(MENU_ENDPOINT)));
};