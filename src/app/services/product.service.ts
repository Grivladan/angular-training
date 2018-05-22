import { Injectable } from '@angular/core';
import { Product } from '../product/model/product';
import { PRODUCTS } from '../product/model/mock-products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }
}