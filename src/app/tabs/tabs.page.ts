import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  role;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.role = this.auth.getRole();
    console.log(this.role);
  }

}
