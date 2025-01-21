import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): ProductType[] {
    return [
      {
        image: 'product1.png',
        name: 'Макарун с малиной',
        quantity: 1,
        price: 55.70,
      },
      {
        image: 'product2.png',
        name: 'Макарун с манго',
        quantity: 1,
        price: 67.80,
      },
      {
        image: 'product3.png',
        name: 'Пирог с ванилью',
        quantity: 1,
        price: 52.75,
      },
      {
        image: 'product4.png',
        name: 'Пирог с фисташками',
        quantity: 1,
        price: 63.55,
      },
    ];
  }
}
