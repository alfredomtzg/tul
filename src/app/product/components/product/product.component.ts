import { Component,  Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Product } from 'src/app/shared/model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  // @Output() productAddCart: EventEmitter<string> = new EventEmitter();

  today = new Date();


  constructor(
    private cartService: CartService) { }

  ngOnInit(): void {
  }

  addCart(): void {
    this.cartService.addCart(this.product)
    // this.productAddCart.emit(this.product.id);
  }
}
