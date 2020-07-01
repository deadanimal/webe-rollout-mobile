(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asset-reading-asset-reading-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/asset-reading/asset-reading.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/asset-reading/asset-reading.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Asset Reading</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-text-center\">\n    <h6>Update Operational Reading of Asset</h6>\n  </div>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-list class=\"line-input\">\n        <!-- <ion-item>\n          <ion-label position=\"stacked\">Type of asset</ion-label>\n          <ion-input type=\"text\" value=\"pump\"></ion-input>\n        </ion-item> -->\n\n        <ion-item>\n          <ion-label position=\"stacked\">Running hours</ion-label>\n          <ion-input type=\"number\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Pressure reading</ion-label>\n          <ion-input type=\"number\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Flow rate</ion-label>\n          <ion-input type=\"number\"></ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/asset-reading/asset-reading-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/asset-reading/asset-reading-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AssetReadingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetReadingPageRoutingModule", function() { return AssetReadingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _asset_reading_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset-reading.page */ "./src/app/asset-reading/asset-reading.page.ts");




const routes = [
    {
        path: '',
        component: _asset_reading_page__WEBPACK_IMPORTED_MODULE_3__["AssetReadingPage"]
    }
];
let AssetReadingPageRoutingModule = class AssetReadingPageRoutingModule {
};
AssetReadingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AssetReadingPageRoutingModule);



/***/ }),

/***/ "./src/app/asset-reading/asset-reading.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/asset-reading/asset-reading.module.ts ***!
  \*******************************************************/
/*! exports provided: AssetReadingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetReadingPageModule", function() { return AssetReadingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _asset_reading_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset-reading-routing.module */ "./src/app/asset-reading/asset-reading-routing.module.ts");
/* harmony import */ var _asset_reading_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asset-reading.page */ "./src/app/asset-reading/asset-reading.page.ts");







let AssetReadingPageModule = class AssetReadingPageModule {
};
AssetReadingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _asset_reading_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssetReadingPageRoutingModule"]
        ],
        declarations: [_asset_reading_page__WEBPACK_IMPORTED_MODULE_6__["AssetReadingPage"]]
    })
], AssetReadingPageModule);



/***/ }),

/***/ "./src/app/asset-reading/asset-reading.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/asset-reading/asset-reading.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0LXJlYWRpbmcvYXNzZXQtcmVhZGluZy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/asset-reading/asset-reading.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/asset-reading/asset-reading.page.ts ***!
  \*****************************************************/
/*! exports provided: AssetReadingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetReadingPage", function() { return AssetReadingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AssetReadingPage = class AssetReadingPage {
    constructor() { }
    ngOnInit() {
    }
};
AssetReadingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-asset-reading',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./asset-reading.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/asset-reading/asset-reading.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./asset-reading.page.scss */ "./src/app/asset-reading/asset-reading.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AssetReadingPage);



/***/ })

}]);
//# sourceMappingURL=asset-reading-asset-reading-module-es2015.js.map