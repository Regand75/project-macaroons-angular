import {Component, OnInit} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";
import {ProductsAmountService} from "./services/products-amount.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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

  public products: ProductType[] = [];

  showCart: boolean = true;
  numberPhone: string = '+375 (29) 368-98-68';
  linkInstagram: string = 'https://www.instagram.com/';

  public formValues = {
    productTitle: '',
    name: '',
    phone: '',
  }

  constructor(private productService: ProductService, public cartService: CartService, public productsAmountService: ProductsAmountService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth" });
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.name.toUpperCase();
    this.cartService.count++;
    this.productsAmountService.amount = this.productsAmountService.amount + product.price;
    alert(`${product.name} добавлен в корзину`);
  }
}
