import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPhoneNumber,
  linkWithCredential,
  signInWithCredential
} from '@angular/fire/auth';
import { PhoneAuthProvider, RecaptchaVerifier } from "firebase/auth";
import { Router } from '@angular/router';
import { firebaseUrl } from 'src/constant';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  name: string = "";
  phone: string = "";
  password: string = "";
  isOtpEnabled : boolean = false; 
  confirmationResult: any;
  _recaptchaVerifier: any;
  public firebaseUrl:string = firebaseUrl;
  verificationId:any;
  constructor(private auth: Auth, private router: Router) { }

  ngOnInit() {}

  recaptcha(){
    this._recaptchaVerifier =  new RecaptchaVerifier(this.auth, 'recaptcha-container', {
      'size': 'invisible',
      'callback': (response:any) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        //onSignInSubmit();
      },
      'expired-callback':()=>{}
    });
  }
  async sendOtp(){
    try{
      if(!this._recaptchaVerifier)
        this.recaptcha();
      if(this.phone !=''){
        this.phone =  "+91"+this.phone;
        this.confirmationResult = await signInWithPhoneNumber(
          this.auth,
          this.phone,
          this._recaptchaVerifier
        ).then((res: any)=>{
          this.isOtpEnabled = true;
          this.verificationId = res.verificationId;
        }).catch((error)=>{
          console.log(error);
        });
      }
      
    }
    catch(e){

    }
    
    
   }


   async verifyCode(code: string) {
    try {
      if(this.verificationId){
        const credential = PhoneAuthProvider.credential(this.verificationId, code);
        const res = await signInWithCredential(this.auth, credential);
        let obj ={
          phoneNumber: res.user.phoneNumber,
          refreshToken: res.user.refreshToken,
          userid: res.user.uid
        }
        localStorage.setItem('loggedInUser', JSON.stringify(obj));
        this.password = '';
        this.phone = '';
        this.isOtpEnabled = false;
        this.router.navigate(["/"]);
      }
    } catch (error) {
      alert("Otp didn't match")
      console.error('Error verifying code', error);
    }
  }

  
}
