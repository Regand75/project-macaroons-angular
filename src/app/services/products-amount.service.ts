import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsAmountService {
  amount: number = 0;

  constructor() { }
}
