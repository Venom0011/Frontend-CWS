import { Component } from '@angular/core';
import { SignupserviceService } from '../Services/signupservice.service';

@Component({
  selector: 'cws-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent {
  isLoggedIn(){
    return !!this.getAccessToken();
  }
  constructor(private signupservice:SignupserviceService){}
  
  
  logout(){
    this.signupservice.logout();
  }
  getAccessToken(){
    return localStorage.getItem('token');
  }
}
