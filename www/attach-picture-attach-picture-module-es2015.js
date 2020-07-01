(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["attach-picture-attach-picture-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/attach-picture/attach-picture.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/attach-picture/attach-picture.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <div class=\"ion-text-center\" style=\"font-weight: bold;\">\n      Attach Picture\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-text-center\">\n    <h3 style=\"color: black; font-weight: bold;\">Before</h3>\n  </div>\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\" style=\"position: relative\">\n      <ion-button shape=\"round\" style=\"position: absolute; top: 0px; right: 0px\">\n        <ion-icon slot=\"icon-only\" name=\"camera\"></ion-icon>\n      </ion-button>\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"6\">\n        <div>\n          <ion-img src=\"assets/image/no-image.png\"></ion-img>\n        </div>\n      </ion-col>\n      <ion-col size=\"3\"></ion-col>\n    </ion-row>\n    \n  </ion-grid>\n\n  <div class=\"ion-text-center\">\n    <h3 style=\"color: black; font-weight: bold;\">After</h3>\n  </div>\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\" style=\"position: relative\">\n      <ion-button shape=\"round\" style=\"position: absolute; top: 0px; right: 0px\">\n        <ion-icon slot=\"icon-only\" name=\"camera\"></ion-icon>\n      </ion-button>\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"6\">\n        <div>\n          <ion-img src=\"assets/image/no-image.png\"></ion-img>\n        </div>\n      </ion-col>\n      <ion-col size=\"3\"></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"ion-text-center\">\n    <ion-button>Submit</ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/attach-picture/attach-picture-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/attach-picture/attach-picture-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AttachPicturePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachPicturePageRoutingModule", function() { return AttachPicturePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _attach_picture_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attach-picture.page */ "./src/app/attach-picture/attach-picture.page.ts");




const routes = [
    {
        path: '',
        component: _attach_picture_page__WEBPACK_IMPORTED_MODULE_3__["AttachPicturePage"]
    }
];
let AttachPicturePageRoutingModule = class AttachPicturePageRoutingModule {
};
AttachPicturePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AttachPicturePageRoutingModule);



/***/ }),

/***/ "./src/app/attach-picture/attach-picture.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/attach-picture/attach-picture.module.ts ***!
  \*********************************************************/
/*! exports provided: AttachPicturePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachPicturePageModule", function() { return AttachPicturePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _attach_picture_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attach-picture-routing.module */ "./src/app/attach-picture/attach-picture-routing.module.ts");
/* harmony import */ var _attach_picture_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attach-picture.page */ "./src/app/attach-picture/attach-picture.page.ts");







let AttachPicturePageModule = class AttachPicturePageModule {
};
AttachPicturePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _attach_picture_routing_module__WEBPACK_IMPORTED_MODULE_5__["AttachPicturePageRoutingModule"]
        ],
        declarations: [_attach_picture_page__WEBPACK_IMPORTED_MODULE_6__["AttachPicturePage"]]
    })
], AttachPicturePageModule);



/***/ }),

/***/ "./src/app/attach-picture/attach-picture.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/attach-picture/attach-picture.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F0dGFjaC1waWN0dXJlL2F0dGFjaC1waWN0dXJlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/attach-picture/attach-picture.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/attach-picture/attach-picture.page.ts ***!
  \*******************************************************/
/*! exports provided: AttachPicturePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachPicturePage", function() { return AttachPicturePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AttachPicturePage = class AttachPicturePage {
    constructor() { }
    ngOnInit() {
    }
};
AttachPicturePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-attach-picture',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./attach-picture.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/attach-picture/attach-picture.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./attach-picture.page.scss */ "./src/app/attach-picture/attach-picture.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AttachPicturePage);



/***/ })

}]);
//# sourceMappingURL=attach-picture-attach-picture-module-es2015.js.map