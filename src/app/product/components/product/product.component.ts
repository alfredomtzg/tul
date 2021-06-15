import { Component,  Input, OnInit, Output, 
  EventEmitter, } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Product } from 'src/app/shared/model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() deleteProductFB: EventEmitter<string> = new EventEmitter();

  today = new Date();


  constructor(
    private cartService: CartService) { }

  ngOnInit(): void {
  }

  addCart(): void {
    this.cartService.addCart(this.product)
  }
  deleteItemColecciton(id: string) {
    this.deleteProductFB.emit(id);
  }
}
