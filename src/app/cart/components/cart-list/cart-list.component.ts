import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QuerySnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/shared/model/product.model';



@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'sku', 'actions'];
 

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProductsFb().subscribe((products: Product[]) => {
      console.log(products);
      this.products = products;
    })

  }
  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe((response) => {
      console.log(response);
      this.products = this.products.filter(item => item.id !== id)
    });
  }
}

