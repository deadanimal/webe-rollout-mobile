import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = {
    username: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['/tabs/tabs/tab1']);
    // if (this.loginForm.username == 'webe' || this.loginForm.username == '1') { // webe
    //   this.auth.setRole('webe');
    //   this.router.navigate(['/tabs/tabs/tab1']);
    // } else if (this.loginForm.username == 'admin' || this.loginForm.username == '2') { // admin
    //   this.auth.setRole('admin');
    //   this.router.navigate(['/tabs/tabs/tab2']);
    // } else if (this.loginForm.username == 'contractor' || this.loginForm.username == '3') { // contractor
    //   this.auth.setRole('contractor');
    //   this.router.navigate(['/tabs/tabs/tab1']);
    // } else {
    //   alert('wrong user!');
    // }
  }

}
