import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-request',
  templateUrl: './work-request.page.html',
  styleUrls: ['./work-request.page.scss'],
})
export class WorkRequestPage implements OnInit {

  // dropdowns
  assetNames = [
    'SLUICE VALVE-SLUICE VALVE-GROUND-200-MM',
    'SLUICE VALVE-SCOUR VALVE-GROUND-150-MM',
    'BUTTERFLY VALVE-BYPASS RESERVOIR VALVE-GROUND-400-MM',
    'SLUICE VALVE-INLET VALVE-GROUND-150-MM',
    'SLUICE VALVE-BYPASS ALTITUDE VALVE-GROUND-150-MM',
    'ALTITUDE VALVE-ALTITUDE VALVE-GROUND-150-MM'
  ];

  constructor() { }

  ngOnInit() {
  }

}
