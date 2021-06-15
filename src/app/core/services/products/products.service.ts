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
  getAllProductsFb() : Observable <any[]>  {
    return this.angularFirestore.collection('products').valueChanges()
  }
  getAllProductsIDFb() : Observable <any[]>  {
    return this.angularFirestore.collection('products').snapshotChanges();
  }
  deleteProductFb(id: string): Promise <unknown> {
    return this.angularFirestore.collection('products').doc(id).delete()

  }
  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }
  getProductById(id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }
  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}/products`, product);
  }
  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }
  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }

}
