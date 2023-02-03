import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  inputUserName:string = "admin";
  inputPassword:string = "admin123";

  dbUserName:string = "admin"
  dbPassword:string = "admin123"

  isUserLoggedIn(){
    if(this.inputUserName === this.dbUserName && this.inputPassword === this.dbPassword){
      return true;
    }
    else{
      alert('Boss ! You are not eligible to access this page...')
      return false;
    }
  }
}
