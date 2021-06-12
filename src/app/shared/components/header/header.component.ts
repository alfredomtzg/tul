import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  total$: Observable <number>;
  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
    ) {
    this.total$ = this.cartService.cart$.pipe(map((products) => products.length))
  }

  ngOnInit(): void {}

  logout() {
    this.authService.logout().then(()=> {
    this.router.navigate(['/'])
    
    })
  }

}
