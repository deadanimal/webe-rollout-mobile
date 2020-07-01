function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asset-detail-asset-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/asset-detail/asset-detail.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/asset-detail/asset-detail.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAssetDetailAssetDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <div class=\"ion-text-center\" style=\"font-weight: bold;\">\n      TASK\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab vertical=\"top\" horizontal=\"end\" edge slot=\"fixed\">\n    <ion-fab-button (click)=\"scanQrCode()\">\n      <ion-icon name=\"scan\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"6\">\n        <div>\n          <ion-img src=\"assets/image/no-image.png\"></ion-img>\n        </div>\n      </ion-col>\n      <ion-col size=\"3\"></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-item>\n    <ion-label position=\"stacked\">BOM / BOQ ID</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        BOM / BOQ Info\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list class=\"line-input\">\n        <ion-item>\n          <ion-label position=\"stacked\">Vendor</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Type of Material</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Grouping</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Material ID</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Material Name</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Material Code</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Unit of Measure</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Price</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Serial No (if required)</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-grid>\n    <ion-row>\n      <!-- <ion-col class=\"ion-text-end\">\n        <ion-button>Add more</ion-button>\n      </ion-col> -->\n      <ion-col class=\"ion-text-center\">\n        <ion-button [routerLink]=\"['/submit']\">Submit</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/asset-detail/asset-detail-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/asset-detail/asset-detail-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: AssetDetailPageRoutingModule */

  /***/
  function srcAppAssetDetailAssetDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetDetailPageRoutingModule", function () {
      return AssetDetailPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _asset_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./asset-detail.page */
    "./src/app/asset-detail/asset-detail.page.ts");

    var routes = [{
      path: '',
      component: _asset_detail_page__WEBPACK_IMPORTED_MODULE_3__["AssetDetailPage"]
    }];

    var AssetDetailPageRoutingModule = function AssetDetailPageRoutingModule() {
      _classCallCheck(this, AssetDetailPageRoutingModule);
    };

    AssetDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AssetDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/asset-detail/asset-detail.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/asset-detail/asset-detail.module.ts ***!
    \*****************************************************/

  /*! exports provided: AssetDetailPageModule */

  /***/
  function srcAppAssetDetailAssetDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetDetailPageModule", function () {
      return AssetDetailPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _asset_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./asset-detail-routing.module */
    "./src/app/asset-detail/asset-detail-routing.module.ts");
    /* harmony import */


    var _asset_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./asset-detail.page */
    "./src/app/asset-detail/asset-detail.page.ts");

    var AssetDetailPageModule = function AssetDetailPageModule() {
      _classCallCheck(this, AssetDetailPageModule);
    };

    AssetDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _asset_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssetDetailPageRoutingModule"]],
      declarations: [_asset_detail_page__WEBPACK_IMPORTED_MODULE_6__["AssetDetailPage"]]
    })], AssetDetailPageModule);
    /***/
  },

  /***/
  "./src/app/asset-detail/asset-detail.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/asset-detail/asset-detail.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAssetDetailAssetDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0LWRldGFpbC9hc3NldC1kZXRhaWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/asset-detail/asset-detail.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/asset-detail/asset-detail.page.ts ***!
    \***************************************************/

  /*! exports provided: AssetDetailPage */

  /***/
  function srcAppAssetDetailAssetDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetDetailPage", function () {
      return AssetDetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/barcode-scanner/ngx */
    "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    var AssetDetailPage =
    /*#__PURE__*/
    function () {
      function AssetDetailPage(auth, barcodeScanner, route, router) {
        var _this = this;

        _classCallCheck(this, AssetDetailPage);

        this.auth = auth;
        this.barcodeScanner = barcodeScanner;
        this.route = route;
        this.router = router; // dropdowns

        this.assetConditions = [{
          key: 1,
          value: "Very Good"
        }, {
          key: 2,
          value: "Good"
        }, {
          key: 3,
          value: "Average"
        }, {
          key: 4,
          value: "Poover"
        }, {
          key: 5,
          value: "Replace"
        }];
        this.regions = ["Sepang", "Kuala Lumpur", "Petaling", "Gombak", "Hulu Langat", "Hulu Selangor", "Klang", "Kuala Selangor", "Kuala Langat", "Sabak Bernam"];
        this.treatmentPlants = ['BOOSTER IXORA PUMP HOUSE', 'TAMAN DAHLIA PUMP HOUSE', 'TAMAN SEROJA PUMP HOUSE'];
        this.assetActions = ['Asset Registration', 'Retire', 'Asset Return', 'Stock Return', 'Return to Vendor', 'Stock Count']; // lists

        this.serviceHistorys = [{
          serviceid: "SERVICE-2020-00019",
          servicedate: "10 March 2020",
          servicedesc: "This service conducted at Petaling zone by 5 members......"
        }, {
          serviceid: "SERVICE-2020-00018",
          servicedate: "7 March 2020",
          servicedesc: "They have an accident occured at Sepang region that......"
        }, {
          serviceid: "SERVICE-2020-00017",
          servicedate: "5 March 2020",
          servicedesc: "Service at Kuala Lumpur have been done at......"
        }];
        this.sliderConfig = {
          slidesPerView: 1.6,
          spaceBetween: 10,
          centeredSlides: true
        };
        this.assetDetail = {
          locationName: "",
          condition: ""
        };
        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation().extras.state) {
            _this.assetDetail.locationName = _this.router.getCurrentNavigation().extras.state.locationName;
          }
        });
      }

      _createClass(AssetDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.role = this.auth.getRole();
        }
      }, {
        key: "scanQrCode",
        value: function scanQrCode() {
          this.barcodeScanner.scan().then(function (barcodeData) {
            console.log("Barcode data", barcodeData);
          }).catch(function (err) {
            console.log("Error", err);
          });
        }
      }]);

      return AssetDetailPage;
    }();

    AssetDetailPage.ctorParameters = function () {
      return [{
        type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AssetDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-asset-detail",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./asset-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/asset-detail/asset-detail.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./asset-detail.page.scss */
      "./src/app/asset-detail/asset-detail.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AssetDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=asset-detail-asset-detail-module-es5.js.map