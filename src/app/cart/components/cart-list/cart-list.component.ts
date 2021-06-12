import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/shared/model/product.model';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  products: Product [] = [ {id: '2', title: 'Hola', price: 2222, description: 'hola' }];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe((product: Product []) => {
      this.products = product;
    });
  }
  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe((response) => {
      console.log(response);
      this.products = this.products.filter(item => item.id !== id)
    });
  }
}

