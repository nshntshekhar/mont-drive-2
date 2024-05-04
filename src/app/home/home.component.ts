import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { AuthService } from '../services/auth-service.service';
import { firebaseUrl } from 'src/constant';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {
  public firebaseUrl:string = firebaseUrl;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {}
  goToDetails(id: any){
    this.router.navigate(['/details/', id]);
  }
}
