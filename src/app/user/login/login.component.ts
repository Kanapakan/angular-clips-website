import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: '',
  }

  showAlert = false
  alertMsg = 'Please wait! Your account is being create.'
  alertColor = 'blue'
  
  constructor() { }

  ngOnInit(): void {
  }

  login() {
    this.showAlert = true
    this.alertMsg = 'login success'
    this.alertColor = 'blue'
  }

}
