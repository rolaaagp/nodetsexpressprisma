import { Product } from "./products.model";

export interface Category {
  id: number;
  name: string;
  products?: Product[];
}


