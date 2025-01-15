import { Component } from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public advantages: AdvantageType[] = [
    {
      dignity: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.',
    },
    {
      dignity: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
    },
    {
      dignity: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
    },
    {
      dignity: 'Честный продукт',
      description: ' Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.',
    },
  ];

  public products: ProductType[] = [
    {
      image: 'product1.png',
      name: 'Макарун с малиной',
      quantity: 1,
      price: 1.70,
    },
    {
      image: 'product2.png',
      name: 'Макарун с манго',
      quantity: 1,
      price: 1.80,
    },
    {
      image: 'product3.png',
      name: 'Пирог с ванилью',
      quantity: 1,
      price: 1.75,
    },
    {
      image: 'product4.png',
      name: 'Пирог с фисташками',
      quantity: 1,
      price: 1.55,
    },
  ];

  showPresent: boolean = false;
  numberPhone: string = '+375 (29) 368-98-68';
  linkInstagram: string = 'https://www.instagram.com/';

  public formValues = {
    productTitle: '',
    name: '',
    phone: '',
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth" });
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.name.toUpperCase();
  }
}
