import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  id!: string | null;
  editMode = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productsService: ProductsService,
    private angularFireStorage: AngularFireStorage,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
    this.editMode = this.router.url.includes('edit');
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.editMode, 'and', this.id);

  }

  ngOnInit(): void {
    this.getProductById(this.id);

  }



  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      sku: [0, [Validators.required]],
      description: ['', [Validators.required]],
      creationDate: Date()
    });
  }

  getProductById(id: string | null) {
    if (id !== null) {
      this.productsService.getProductByIdFb(id).subscribe((res: any) => 
      this.form.patchValue(res?.payload.data()))
    }
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.productsService
        .createProductFb(this.form.value)
        .then((response) => {
          console.log(response);
          this.router.navigate(['/shop/products'])
          this.form.reset({ title: '', sku: 0, description: '' })
        })
        .catch(error => console.log(error)
        )
    }
  }



}
