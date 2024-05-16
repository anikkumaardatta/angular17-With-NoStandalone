import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {



  getData(data:NgForm){
    console.log(data);
  }
  // username: any;
  // password: any;
  // getUsername(e: Event) {
  //   const value = (e.target as HTMLInputElement).value;
  //   console.log(value)
  //   this.username=value
  // }
  // getPassword(e: Event) {
  //   const value = (e.target as HTMLInputElement).value;
  //   console.log(value)
  //   this.password=value
  // }
  
}
