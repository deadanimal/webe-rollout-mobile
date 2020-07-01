(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["work-request-work-request-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/work-request/work-request.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/work-request/work-request.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Work Request</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-text-center\">\n    <h4>Create Work Request (WR)</h4>\n  </div>\n\n  <ion-img src=\"assets/image/no-image.png\"></ion-img>\n\n  <ion-list class=\"ion-padding line-input\">\n    <ion-item>\n      <ion-label position=\"stacked\">Nama Aset</ion-label>\n      <ion-select placeholder=\"Sila Pilih\" class=\"ion-text-wrap\">\n        <ion-select-option [value]=\"assetName\" *ngFor=\"let assetName of assetNames\">{{ assetName }}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Jenis Permasalahan</ion-label>\n      <ion-select placeholder=\"Sila Pilih\" class=\"ion-text-wrap\">\n        <ion-select-option>Masalah Kebocoran</ion-select-option>\n        <ion-select-option>Masalah Paip Tersumbat</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Huraian</ion-label>\n      <ion-textarea rows=\"5\"></ion-textarea>\n    </ion-item>\n  </ion-list>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-text-end\">\n          <ion-button>Hantar</ion-button>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div class=\"ion-text-start\">\n          <ion-button>Ambil Gambar</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/work-request/work-request-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/work-request/work-request-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: WorkRequestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkRequestPageRoutingModule", function() { return WorkRequestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _work_request_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work-request.page */ "./src/app/work-request/work-request.page.ts");




const routes = [
    {
        path: '',
        component: _work_request_page__WEBPACK_IMPORTED_MODULE_3__["WorkRequestPage"]
    }
];
let WorkRequestPageRoutingModule = class WorkRequestPageRoutingModule {
};
WorkRequestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WorkRequestPageRoutingModule);



/***/ }),

/***/ "./src/app/work-request/work-request.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/work-request/work-request.module.ts ***!
  \*****************************************************/
/*! exports provided: WorkRequestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkRequestPageModule", function() { return WorkRequestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _work_request_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work-request-routing.module */ "./src/app/work-request/work-request-routing.module.ts");
/* harmony import */ var _work_request_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work-request.page */ "./src/app/work-request/work-request.page.ts");







let WorkRequestPageModule = class WorkRequestPageModule {
};
WorkRequestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _work_request_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkRequestPageRoutingModule"]
        ],
        declarations: [_work_request_page__WEBPACK_IMPORTED_MODULE_6__["WorkRequestPage"]]
    })
], WorkRequestPageModule);



/***/ }),

/***/ "./src/app/work-request/work-request.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/work-request/work-request.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".alert-radio-label.sc-ion-alert-md {\n  white-space: pre-line !important;\n}\n\n.alert-radio-label.sc-ion-alert-ios {\n  white-space: pre-line !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Qcm90b3R5cGUvcHJvdG8tMDAzMC13ZWJlLXJvbGxvdXQtbW9iaWxlL3NyYy9hcHAvd29yay1yZXF1ZXN0L3dvcmstcmVxdWVzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3dvcmstcmVxdWVzdC93b3JrLXJlcXVlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC93b3JrLXJlcXVlc3Qvd29yay1yZXF1ZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydC1yYWRpby1sYWJlbC5zYy1pb24tYWxlcnQtbWQge1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xufVxuICBcbi5hbGVydC1yYWRpby1sYWJlbC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgIWltcG9ydGFudDtcbn0iLCIuYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG59XG5cbi5hbGVydC1yYWRpby1sYWJlbC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/work-request/work-request.page.ts":
/*!***************************************************!*\
  !*** ./src/app/work-request/work-request.page.ts ***!
  \***************************************************/
/*! exports provided: WorkRequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkRequestPage", function() { return WorkRequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WorkRequestPage = class WorkRequestPage {
    constructor() {
        // dropdowns
        this.assetNames = [
            'SLUICE VALVE-SLUICE VALVE-GROUND-200-MM',
            'SLUICE VALVE-SCOUR VALVE-GROUND-150-MM',
            'BUTTERFLY VALVE-BYPASS RESERVOIR VALVE-GROUND-400-MM',
            'SLUICE VALVE-INLET VALVE-GROUND-150-MM',
            'SLUICE VALVE-BYPASS ALTITUDE VALVE-GROUND-150-MM',
            'ALTITUDE VALVE-ALTITUDE VALVE-GROUND-150-MM'
        ];
    }
    ngOnInit() {
    }
};
WorkRequestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work-request',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work-request.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/work-request/work-request.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work-request.page.scss */ "./src/app/work-request/work-request.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WorkRequestPage);



/***/ })

}]);
//# sourceMappingURL=work-request-work-request-module-es2015.js.map