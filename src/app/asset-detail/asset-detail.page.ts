import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { AuthService } from "../services/auth/auth.service";

@Component({
  selector: "app-asset-detail",
  templateUrl: "./asset-detail.page.html",
  styleUrls: ["./asset-detail.page.scss"]
})
export class AssetDetailPage implements OnInit {

  action;

  // dropdowns
  assetConditions = [
    {
      key: 1,
      value: "Very Good"
    },
    {
      key: 2,
      value: "Good"
    },
    {
      key: 3,
      value: "Average"
    },
    {
      key: 4,
      value: "Poover"
    },
    {
      key: 5,
      value: "Replace"
    }
  ];
  regions = [
    "Sepang",
    "Kuala Lumpur",
    "Petaling",
    "Gombak",
    "Hulu Langat",
    "Hulu Selangor",
    "Klang",
    "Kuala Selangor",
    "Kuala Langat",
    "Sabak Bernam"
  ];
  treatmentPlants = [
    'BOOSTER IXORA PUMP HOUSE',
    'TAMAN DAHLIA PUMP HOUSE',
    'TAMAN SEROJA PUMP HOUSE'
  ];
  assetActions = [
    'Asset Registration',
    'Retire',
    'Asset Return',
    'Stock Return',
    'Return to Vendor',
    'Stock Count'
  ];

  // lists
  serviceHistorys = [
    {
      serviceid: "SERVICE-2020-00019",
      servicedate: "10 March 2020",
      servicedesc: "This service conducted at Petaling zone by 5 members......"
    },
    {
      serviceid: "SERVICE-2020-00018",
      servicedate: "7 March 2020",
      servicedesc: "They have an accident occured at Sepang region that......"
    },
    {
      serviceid: "SERVICE-2020-00017",
      servicedate: "5 March 2020",
      servicedesc: "Service at Kuala Lumpur have been done at......"
    }
  ];

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  assetDetail = {
    locationName: "",
    condition: ""
  };

  role;

  constructor(
    private auth: AuthService,
    private barcodeScanner: BarcodeScanner,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.assetDetail.locationName = this.router.getCurrentNavigation().extras.state.locationName;
      }
    });
  }

  ngOnInit() {
    this.role = this.auth.getRole();
  }

  scanQrCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        console.log("Barcode data", barcodeData);
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
}
