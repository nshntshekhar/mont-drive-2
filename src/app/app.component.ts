import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth-service.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'mail' },
    { title: 'About Us', url: '/aboutus', icon: 'paper-plane' },
    { title: 'Our Products', url: '/our-products', icon: 'heart' },
    { title: 'Product Selector', url: '/product-selector', icon: 'archive' },
    { title: 'Gallery', url: '/gallery', icon: 'trash' },
    { title: 'Downloads', url: '/downloads', icon: 'warning' },
    { title: 'Contact Us', url: '/contact-us', icon: 'warning' },
    { title: 'Logout', url: '/contact-us', icon: 'warning' },
  ];
  public labels = [];
  constructor(private authService: AuthService) {
    console.log(authService.isLoggedIn());
    console.log(authService.getUserNumber());
  }
}
