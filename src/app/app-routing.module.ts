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
    path: 'home',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: ()=> import('./product/product.module').then((m)=>m.ProductModule)
      }

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
