import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'auth',
    pathMatch:'full'
  },
  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.module').then((m)=>m.AuthModule)
  },
  {
    path: 'shop',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: ()=> import('./home/home.module').then((m)=>m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: ()=> import('./product/product.module').then((m)=>m.ProductModule)
      },
      {
        path: 'order',
        loadChildren: () =>
          import('./order/order.module').then((m) => m.OrderModule),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./create-product/create-product.module').then((m) => m.CreateProductModule),
      },

    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
