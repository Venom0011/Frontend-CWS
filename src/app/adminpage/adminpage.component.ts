import { Component } from '@angular/core';
import { SignupserviceService } from '../Services/signupservice.service';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 0f124b59fb2ead1ed96a7d7628cd8decbb9d776a

@Component({
  selector: 'cws-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent {
  isLoggedIn(){
    return !!this.getAccessToken();
  }
<<<<<<< HEAD
  constructor(private signupservice:SignupserviceService,
              private router:Router){}
=======
  constructor(private signupservice:SignupserviceService){}
>>>>>>> 0f124b59fb2ead1ed96a7d7628cd8decbb9d776a
  
  
  logout(){
    this.signupservice.logout();
  }
  getAccessToken(){
    return localStorage.getItem('token');
  }
<<<<<<< HEAD
  isAdminPage(){
    return this.router.url=='/admin-page';
  }
=======
>>>>>>> 0f124b59fb2ead1ed96a7d7628cd8decbb9d776a
}
