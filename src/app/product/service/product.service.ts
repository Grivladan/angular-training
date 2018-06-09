import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { PRODUCTS } from '../model/mock-products';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }
}
