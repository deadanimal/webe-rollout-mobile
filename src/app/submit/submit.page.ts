import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.page.html',
  styleUrls: ['./submit.page.scss'],
})
export class SubmitPage implements OnInit {

  assets = [
    {
      assetId: "123-XX",
      action: "Asset Registration",
      assetName: "Pump",
      assetLocation: "TAMAN DAHLIA PUMP HOUSE"
    },
    {
      assetId: "125-KP",
      action: "Asset Return",
      assetName: "Valve",
      assetLocation: "TAMAN DAHLIA PUMP HOUSE"
    },
    {
      assetId: "999-ZZ",
      action: "Retire",
      assetName: "Pump",
      assetLocation: "TAMAN DAHLIA PUMP HOUSE"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
