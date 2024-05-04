import { Component, OnInit } from '@angular/core';
import { firebaseUrl } from 'src/constant';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
})
export class AboutusComponent  implements OnInit {
  public firebaseUrl:string = firebaseUrl;

  constructor() { }

  ngOnInit() {}

}
