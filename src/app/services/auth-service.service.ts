import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(){
    let user = localStorage.getItem('loggedInUser');
    console.log(user)
    if(user){
      return true;
    }else{
      return false;
    }
  }

  getUserNumber(){
    let user = localStorage.getItem('loggedInUser');
    if(user){
      let obj = JSON.parse(user);
      return obj.phoneNumber;
      return true;
    }else{
      return '';
    }
  }
}
