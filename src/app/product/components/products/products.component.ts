import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/shared/model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];


  constructor(    private productsService: ProductsService
    ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.productsService.getAllProductsIDFb().subscribe((products) => {
      this.products = [];
      products.forEach(element => {
        this.products.push({
          idt: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.products);
    });
  }
  deleteProduct(id: string) {
    console.log(id, ' se elimino');
  }

}
