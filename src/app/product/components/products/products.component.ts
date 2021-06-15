import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/shared/model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];


  constructor(    
    private productsService: ProductsService,
    private snackBar: MatSnackBar
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
    this.productsService.deleteProductFb(id).then((response)=> {
      console.log(response, 'response se eliminó')
      this.snackBar.open('Se borro el registro', '', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      })
      
    }).catch(error=> console.log(error))
  }

}
