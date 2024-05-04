import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import emailjs from '@emailjs/browser';
import { AuthService } from '../services/auth-service.service';
import { firebaseUrl } from 'src/constant';
// import { getStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent  implements OnInit {
  isModalOpen = false;
  name: string = "";
  email: string = "";
  reason: string = "";
  phoneNumber: string = '';
  isAlertOpen = false;
  alertButtons = ['Ok'];
  message: any='';
  
  private readonly URL = 'assets/json/jde6.json';
  public id!: any;
  public  data!: any;
  public selectedModel!: any;
  public firebaseUrl:string = firebaseUrl;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') ;
    fetch("../../assets/json/jde6.json").then(res=>res.json()).then(json=>{
      this.data = json.filter((x: any)=>  x.id == this.id)[0];
      this.selectedModel = this.data?.details.data[0];
      console.log(this.data);
      //DO YOUR STAFF
  });
  }
  changeModel(model: any) {
    this.selectedModel = this.data?.details.data.filter((x: any)=>  x.Model == model.detail.value)[0];
    console.log(this.selectedModel)
  }
  setOpen(isOpen: boolean) {
    this.name = '';
    this.email = '';
    this.reason = '';
    this.isModalOpen = isOpen;
  }

  setAlertOpen(isOpen: boolean, message: any) {
    this.isAlertOpen = isOpen;
    this.message = message;
  }

  submitRequest(){
    if(this.name && this.email && this.reason){
      try {
        var templateParams = {
          name: this.name,
          // phone: this.auth.getUserNumber(),
          email: this.email,
          reason: this.reason
        };
        
        emailjs.send('service_qulsvdp', 'template_nrttm8x', templateParams,{publicKey: 'ODqmEFy-3DdfHoKOW'}).then(
          ((response: any)=>{
            this.setAlertOpen(true , 'Your request has been sent successfully');
            console.log('SUCCESS!', response.status, response.text);
          }),
          ((error: any)=>{
            this.setAlertOpen(true , 'something went wrong');
            console.log('FAILED...', error);
          })
          
        );
      } catch (err) {
        console.error(err);
      }
    }
    else{
      this.setAlertOpen(true , 'All Fields are mandatory');

    }
  }
}
