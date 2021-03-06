import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/shared/model/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: Product [] = [];
  private cart = new BehaviorSubject<Product[]>([])

  cart$ = this.cart.asObservable();
  constructor() {}

  addCart(product: Product) {
    this.products = [...this.products, product];
    this.cart.next(this.products)
  }
  deleteProduct(title: string) {
    this.products = this.products.filter((item)=> item.title !== title)
    this.cart.next(this.products)
  }
}
