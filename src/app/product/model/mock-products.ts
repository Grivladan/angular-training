import { Product } from './product';
import { ProductCategory } from './product-category';


export const PRODUCTS: Product[] = [
    {
      name: 'Apple iPad',
      description: 'iPad description',
      price: 1000,
      category: ProductCategory.Laptop,
      isAvailable: true,
      complectation: ["complectation1", "complectation2"],
      components: ["component1", "component2", "component3"]
    },
    {
      name: 'Acer',
      description: 'Acer description',
      price: 2000,
      category: ProductCategory.Notebook,
      isAvailable: true,
      complectation: ["complectation1", "complectation2"],
      components: ["component1", "component2", "component3"]
    }
];