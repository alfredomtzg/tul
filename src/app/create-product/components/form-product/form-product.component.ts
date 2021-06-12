import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  form!: FormGroup;
  image$!: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productsService: ProductsService,
    private angularFireStorage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void { }

 

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.productsService
        .createProduct(this.form.value)
        .subscribe((response) => {
          console.log(response);
          this.router.navigate(['./shop/product'])
        });
    }
  }

  get priceField() {
    return this.form.get('price');
  }

}
