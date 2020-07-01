function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asset-location-asset-location-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/asset-location/asset-location.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/asset-location/asset-location.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAssetLocationAssetLocationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <div class=\"ion-text-center\" style=\"font-weight: bold;\">\n      ASSET LOCATION\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab vertical=\"top\" horizontal=\"end\" edge slot=\"fixed\">\n    <ion-fab-button (click)=\"locateMe('', 2.835388, 101.738382)\">\n      <ion-icon name=\"locate\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <div id=\"mapId\" style=\"height: 300px\"></div>\n  <!-- <div\n    id=\"map\"\n    style=\"height: 300px;\"\n    leaflet\n    [leafletOptions]=\"options\"\n    (leafletMapReady)=\"onMapReady($event)\"\n  ></div> -->\n\n  <div class=\"ion-padding-top ion-padding-start ion-padding-end\">\n    <ion-list class=\"line-input\">\n      <ion-item>\n        <ion-label position=\"stacked\">Location name</ion-label>\n        <ion-input [(ngModel)]=\"locationName\"></ion-input>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ion-list-header class=\"air-selangor-toolbar\">\n    <div class=\"ion-text-center\">\n      List of Pump House\n    </div>\n  </ion-list-header>\n  <ion-card *ngFor=\"let pumphouse of pumphouses\" (click)=\"locateMe(pumphouse.name, pumphouse.lat, pumphouse.lng)\">\n    <!-- <ion-card-content> -->\n      <div class=\"ion-float-left ion-padding\">\n        {{ pumphouse.name }}\n      </div>\n      <div class=\"ion-float-right ion-padding\" style=\"font-size: 1rem\">\n        <ion-icon name=\"locate\"></ion-icon>\n      </div>\n    <!-- </ion-card-content> -->\n  </ion-card>\n\n  <div class=\"ion-text-center ion-padding\">\n    <ion-button (click)=\"confirm()\">Confirm</ion-button>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/asset-location/asset-location-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/asset-location/asset-location-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: AssetLocationPageRoutingModule */

  /***/
  function srcAppAssetLocationAssetLocationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetLocationPageRoutingModule", function () {
      return AssetLocationPageRoutingModule;
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


    var _asset_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./asset-location.page */
    "./src/app/asset-location/asset-location.page.ts");

    var routes = [{
      path: '',
      component: _asset_location_page__WEBPACK_IMPORTED_MODULE_3__["AssetLocationPage"]
    }];

    var AssetLocationPageRoutingModule = function AssetLocationPageRoutingModule() {
      _classCallCheck(this, AssetLocationPageRoutingModule);
    };

    AssetLocationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AssetLocationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/asset-location/asset-location.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/asset-location/asset-location.module.ts ***!
    \*********************************************************/

  /*! exports provided: AssetLocationPageModule */

  /***/
  function srcAppAssetLocationAssetLocationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetLocationPageModule", function () {
      return AssetLocationPageModule;
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


    var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @asymmetrik/ngx-leaflet */
    "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _asset_location_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./asset-location-routing.module */
    "./src/app/asset-location/asset-location-routing.module.ts");
    /* harmony import */


    var _asset_location_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./asset-location.page */
    "./src/app/asset-location/asset-location.page.ts");

    var AssetLocationPageModule = function AssetLocationPageModule() {
      _classCallCheck(this, AssetLocationPageModule);
    };

    AssetLocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__["LeafletModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _asset_location_routing_module__WEBPACK_IMPORTED_MODULE_6__["AssetLocationPageRoutingModule"]],
      declarations: [_asset_location_page__WEBPACK_IMPORTED_MODULE_7__["AssetLocationPage"]]
    })], AssetLocationPageModule);
    /***/
  },

  /***/
  "./src/app/asset-location/asset-location.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/asset-location/asset-location.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAssetLocationAssetLocationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0LWxvY2F0aW9uL2Fzc2V0LWxvY2F0aW9uLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/asset-location/asset-location.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/asset-location/asset-location.page.ts ***!
    \*******************************************************/

  /*! exports provided: AssetLocationPage */

  /***/
  function srcAppAssetLocationAssetLocationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetLocationPage", function () {
      return AssetLocationPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js"); // import * as L from "leaflet";


    var AssetLocationPage =
    /*#__PURE__*/
    function () {
      /* options = {
        layers: [
          L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
            maxZoom: 20,
            subdomains: ["mt0", "mt1", "mt2", "mt3"]
          })
        ],
        zoom: 13,
        center: L.latLng(2.835388, 101.738382)
      }; */
      function AssetLocationPage(geolocation, alertController, router) {
        _classCallCheck(this, AssetLocationPage);

        this.geolocation = geolocation;
        this.alertController = alertController;
        this.router = router;
        this.pumphouses = [{
          name: "Taman Ixora Pump House",
          lat: 2.817576,
          lng: 101.728028
        }, {
          name: "Taman Dahlia Pump House",
          lat: 2.825785,
          lng: 101.722880
        }, {
          name: "Taman Seroja Pump House",
          lat: 2.826200,
          lng: 101.725592
        }, {
          name: "Taman Mawar Pump House",
          lat: 2.831514,
          lng: 101.733691
        }, {
          name: "Desa Vista Pump House",
          lat: 2.841246,
          lng: 101.747838
        }];
      }

      _createClass(AssetLocationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.loadMap();
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          this.map = new leaflet__WEBPACK_IMPORTED_MODULE_4__["Map"]("mapId").setView([2.835388, 101.738382], 14);
          Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"])("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
            maxZoom: 20,
            subdomains: ["mt0", "mt1", "mt2", "mt3"]
          }).addTo(this.map); // This line is added to add the Tile Layer to our map

          var marker = new leaflet__WEBPACK_IMPORTED_MODULE_4__["Marker"]([2.835388, 101.738382], {
            draggable: true,
            icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["icon"])({
              iconSize: [30, 30],
              iconAnchor: [13, 41],
              iconUrl: "assets/icon/location.svg"
            })
          });
          marker.addTo(this.map);
          marker.on("dragend", function () {
            var lat = marker.getLatLng().lat;
            var lng = marker.getLatLng().lng;
            marker.bindPopup("Moved to: " + lat.toFixed(4) + ", " + lng.toFixed(4) + ".");
          }); // Add multiple markers

          for (var i = 0; i < this.pumphouses.length; i++) {
            var markerpumphouse = new leaflet__WEBPACK_IMPORTED_MODULE_4__["Marker"]([this.pumphouses[i].lat, this.pumphouses[i].lng], {
              icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["icon"])({
                iconSize: [30, 30],
                iconAnchor: [13, 41],
                iconUrl: "assets/icon/location.svg"
              })
            }).bindPopup("Pump house: " + this.pumphouses[i].name).addTo(this.map);
          }
        }
        /* onMapReady(map: L.Map) {
          setTimeout(() => {
            map.invalidateSize();
          }, 0);
             // this.geolocation.getCurrentPosition().then(resp => {
          //   if (resp) {
              let marker = new L.Marker(
                [2.835388, 101.738382],
                {
                  draggable: true,
                  icon: L.icon({
                    iconSize: [30, 30],
                    iconAnchor: [13, 41],
                    iconUrl: "assets/icon/location.svg"
                  })
                }
              );
              marker.addTo(map);
              marker.on("dragend", function() {
                var lat = marker.getLatLng().lat;
                var lng = marker.getLatLng().lng;
                marker.bindPopup(
                  "Moved to: " + lat.toFixed(4) + ", " + lng.toFixed(4) + "."
                );
              });
                 map.panTo(new L.LatLng(2.835388, 101.738382));
          //   }
          // });
             for (var i = 0; i < this.pumphouses.length; i++) {
            var markerpumphouse = new L.Marker([ this.pumphouses[i].lat, this.pumphouses[i].lng ], {
              icon: L.icon({
                iconSize: [30, 30],
                iconAnchor: [13, 41],
                iconUrl: "assets/icon/location.svg"
              })
            })
              .bindPopup("Pump house: " + this.pumphouses[i].name)
              .addTo(map);
          }
        } */

      }, {
        key: "locateMe",
        value: function locateMe(name, lat, lng) {
          this.map.panTo(new leaflet__WEBPACK_IMPORTED_MODULE_4__["LatLng"](lat, lng));
          this.locationName = name;
        }
      }, {
        key: "confirm",
        value: function confirm() {
          var navigationExtras = {
            state: {
              locationName: this.locationName
            }
          };
          this.router.navigate(['asset-detail'], navigationExtras);
        }
      }]);

      return AssetLocationPage;
    }();

    AssetLocationPage.ctorParameters = function () {
      return [{
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AssetLocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-asset-location",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./asset-location.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/asset-location/asset-location.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./asset-location.page.scss */
      "./src/app/asset-location/asset-location.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AssetLocationPage);
    /***/
  }
}]);
//# sourceMappingURL=asset-location-asset-location-module-es5.js.map