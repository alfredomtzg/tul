import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/shared/model/product.model';



@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'sku', 'actions'];
  products$!: Observable <Product[]>;


  constructor(
    private productsService: ProductsService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.fetchProductsCart();
  }

  fetchProductsCart() {
      this.products$ = this.cartService.cart$
  }
  deleteProductCart(title: string) {
    console.log(title, 'Eliminar producto');
    this.cartService.deleteProduct(title);
  }
}

