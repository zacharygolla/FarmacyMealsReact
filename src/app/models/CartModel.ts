import { ItemModel } from "./ItemModel";

export interface CartModel {
    items: ItemModel [];
    subtotal: number;
    tax: number;
    total: number;    
  };