import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firebaseUrl } from 'src/constant';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent  implements OnInit {
  public firebaseUrl:string = firebaseUrl;

  constructor(private router: Router) { }

  ngOnInit() {}
  goToDetails(id: any){
    this.router.navigate(['/details/', id]);
    console.log(id)
  }
}
