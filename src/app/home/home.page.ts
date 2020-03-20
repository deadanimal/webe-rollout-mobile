import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  type: string = "pending";
  role;

  // lists
  pendings = [
    {
      type: "Pending",
      date: "29 February 2020",
      desc: "This need to be approved before 8 March 2020....."
    },
    {
      type: "Pending",
      date: "12 February 2020",
      desc: "Work order have been done and need to be approve by....."
    },
    {
      type: "Pending",
      date: "8 February 2020",
      desc: "Please approved this because this is urgent by....."
    }
  ];
  approvals = [
    {
      approvalID: 'DOC123',
      approvalDate: '2020-03-03',
      approvalBy: 'Dato Ali bin Abi Talib',
      status: 'approve'
    },
    {
      approvalID: 'DOC333',
      approvalDate: '2020-03-02',
      approvalBy: 'Ir Dr Tan Cheng Lock',
      status: 'reject'
    },
    {
      approvalID: 'DOC555',
      approvalDate: '2020-03-01',
      approvalBy: 'Mr Michael',
      status: 'approve'
    }
  ];

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.role = this.auth.getRole();
  }

}
