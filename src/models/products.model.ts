import { Category } from "./categories.model";

export interface Product {
  id: number;
  name: string;
  category: Category;
}
