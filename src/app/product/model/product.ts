import { ProductCategory } from './product-category';

export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  isAvailable: boolean;
  complectation: Array<string>;
  components: Array<string>;
}

export class Product implements IProduct {
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  isAvailable: boolean;
  complectation: Array<string>;
  components: Array<string>;
}