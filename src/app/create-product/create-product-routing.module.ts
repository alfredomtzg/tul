import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from './components/form-product/form-product.component';

const routes: Routes = [
  {
    path: '',
    component: FormProductComponent

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateProductRoutingModule { }
