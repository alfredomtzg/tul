import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    RouterModule
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
