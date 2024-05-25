import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  isLoogedIn: boolean = false;
  constructor(private route: Router) { }

  ngOnInit() {
    var user = localStorage.getItem("loggedInUser");
    if(user !=null){
      this.isLoogedIn = true;
    }
  }
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'About Us', url: '/aboutus', icon: 'information' },
    { title: 'Our Products', url: '/our-products', icon: 'heart' },
    // { title: 'Product Selector', url: '/product-selector', icon: 'archive' },
    // { title: 'Gallery', url: '/gallery', icon: 'trash' },
    // { title: 'Blog', url: '/downloads', icon: 'newspaper' },
    // { title: 'Contact Us', url: '/contact-us', icon: 'warning' },
  ];

  logout(){
    localStorage.removeItem('loggedInUser');
    this.route.navigate(['/login']);
  }
}
