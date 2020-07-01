(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["punchlist-punchlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/punchlist/punchlist.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/punchlist/punchlist.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Punchlist</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <div class=\"ion-text-center\">\n      <h3 style=\"color: black; font-weight: bold;\">Punchlist for a new building</h3>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"4\">\n            <h5 style=\"color: black; font-weight: bold;\">Room</h5>\n            <p>Living Room</p>\n          </ion-col>\n          <ion-col>\n            <h5 style=\"color: black; font-weight: bold;\">Item</h5>\n            <ion-list>\n              <ol>\n                <li><ion-input placeholder=\"Enter input here\"></ion-input></li>\n                <li><ion-input placeholder=\"Enter input here\"></ion-input></li>\n                <li><ion-input placeholder=\"Enter input here\"></ion-input></li>\n              </ol>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            <p>Kitchen</p>\n          </ion-col>\n          <ion-col>\n            <ion-list>\n              <ol>\n                <li><ion-input placeholder=\"Enter input here\"></ion-input></li>\n                <li><ion-input placeholder=\"Enter input here\"></ion-input></li>\n                <li><ion-input placeholder=\"Enter input here\"></ion-input></li>\n              </ol>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-card>\n\n  <div class=\"ion-text-center\">\n    <ion-button>Submit</ion-button>\n    <ion-button [routerLink]=\"['/attach-picture']\">Attach Picture</ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/punchlist/punchlist-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/punchlist/punchlist-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PunchlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PunchlistPageRoutingModule", function() { return PunchlistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _punchlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./punchlist.page */ "./src/app/punchlist/punchlist.page.ts");




const routes = [
    {
        path: '',
        component: _punchlist_page__WEBPACK_IMPORTED_MODULE_3__["PunchlistPage"]
    }
];
let PunchlistPageRoutingModule = class PunchlistPageRoutingModule {
};
PunchlistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PunchlistPageRoutingModule);



/***/ }),

/***/ "./src/app/punchlist/punchlist.module.ts":
/*!***********************************************!*\
  !*** ./src/app/punchlist/punchlist.module.ts ***!
  \***********************************************/
/*! exports provided: PunchlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PunchlistPageModule", function() { return PunchlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _punchlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./punchlist-routing.module */ "./src/app/punchlist/punchlist-routing.module.ts");
/* harmony import */ var _punchlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./punchlist.page */ "./src/app/punchlist/punchlist.page.ts");







let PunchlistPageModule = class PunchlistPageModule {
};
PunchlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _punchlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["PunchlistPageRoutingModule"]
        ],
        declarations: [_punchlist_page__WEBPACK_IMPORTED_MODULE_6__["PunchlistPage"]]
    })
], PunchlistPageModule);



/***/ }),

/***/ "./src/app/punchlist/punchlist.page.scss":
/*!***********************************************!*\
  !*** ./src/app/punchlist/punchlist.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1bmNobGlzdC9wdW5jaGxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/punchlist/punchlist.page.ts":
/*!*********************************************!*\
  !*** ./src/app/punchlist/punchlist.page.ts ***!
  \*********************************************/
/*! exports provided: PunchlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PunchlistPage", function() { return PunchlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PunchlistPage = class PunchlistPage {
    constructor() { }
    ngOnInit() {
    }
};
PunchlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-punchlist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./punchlist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/punchlist/punchlist.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./punchlist.page.scss */ "./src/app/punchlist/punchlist.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PunchlistPage);



/***/ })

}]);
//# sourceMappingURL=punchlist-punchlist-module-es2015.js.map