import { Component, OnInit } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPhoneNumber
} from '@angular/fire/auth';
import { getAuth, RecaptchaVerifier } from "firebase/auth";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent  implements OnInit {
  name: string = "";
  email: string = "";
  password: string = "";
  phoneNumber: string = '';
  otp: string = '';
  isOtpEnabled:boolean= true
  containerName: string = 'recaptcha-container';
  
  constructor(private auth: Auth) {
    console.log(auth);
   
   }

  ngOnInit() {}
  
  async signup() {
    console.log(this.email, this.password, this.name);
    const user = await createUserWithEmailAndPassword(
      this.auth,
      this.email,
      this.password
      ).then((fund)=>{
        console.log(fund)
      });
    return user;
 }

 async sendOtp(){
  console.log('here');
  const appVerifier =  new RecaptchaVerifier(this.auth, 'recaptcha-container', {
    'size': 'invisible',
    'callback': (response:any) => {
      console.log(response);
      
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      //onSignInSubmit();
    }
  });
  const confirmationResult = await signInWithPhoneNumber(
    this.auth,
    this.phoneNumber,
    appVerifier
  ).then((res)=>{
    this.isOtpEnabled = false;
    console.log(res);
  });
  console.log(appVerifier);
 }
//  async sendOtp() {
//   const appVerifier = this.firebaseApp.RecaptchaVerifier('recaptcha-container');
//   try {
//     const confirmationResult = await this.afAuth.signInWithPhoneNumber(
//       this.phoneNumber,
//       appVerifier
//     );
//     const verificationCode = prompt('Enter OTP');
//     await confirmationResult.confirm(verificationCode);
//     console.log('User signed up successfully');
//   } catch (error) {
//     console.error('Error signing up:', error);
//   }
// }
}
