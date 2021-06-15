import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/shared/model/product.model';
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private http: HttpClient,
    private angularFirestore: AngularFirestore
  ) { }

  createProductFb(product: Product) {
    return this.angularFirestore.collection('products').add(product);
  }
  updateProductFb(id: string, product: Partial<Product>): Promise <void> {
    return this.angularFirestore.collection('products').doc(id).update(product);
  }
  getAllProductsFb() : Observable <any[]>  {
    return this.angularFirestore.collection('products').valueChanges()
  }
  getAllProductsIDFb() : Observable <any[]>  {
    return this.angularFirestore.collection('products').snapshotChanges();
  }
  deleteProductFb(id: string): Promise <unknown> {
    return this.angularFirestore.collection('products').doc(id).delete();
  }
  getProductByIdFb (id: string ): Observable <unknown> {
    return this.angularFirestore.collection('products').doc(id).snapshotChanges();
  }

}
