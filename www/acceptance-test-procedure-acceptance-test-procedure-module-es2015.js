(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["acceptance-test-procedure-acceptance-test-procedure-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/acceptance-test-procedure/acceptance-test-procedure.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/acceptance-test-procedure/acceptance-test-procedure.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Acceptance Test Procedure</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        \n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list class=\"line-input\">\n        <ion-item>\n          <ion-label position=\"stacked\">Test ID</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Test Item Description</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Procedure ID</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Test Procedure Description</ion-label>\n          <ion-textarea rows=\"3\"></ion-textarea>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        \n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list class=\"line-input\">\n        <ion-item>\n          <ion-label position=\"stacked\">Test Case ID</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Test Case Description</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Test Result</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Test Date</ion-label>\n          <ion-datetime></ion-datetime>\n        </ion-item>\n\n        <hr>\n        <h3 style=\"color: black; font-weight: bold;\">Tester</h3>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"8\"><ion-input placeholder=\"Enter name\"></ion-input></ion-col>\n            <ion-col size=\"4\" class=\"ion-padding\"><a (click)=\"presentModal()\">Signature</a></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"8\"><ion-input placeholder=\"Enter name\"></ion-input></ion-col>\n            <ion-col size=\"4\" class=\"ion-padding\"><a (click)=\"presentModal()\">Signature</a></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"8\"><ion-input placeholder=\"Enter name\"></ion-input></ion-col>\n            <ion-col size=\"4\" class=\"ion-padding\"><a (click)=\"presentModal()\">Signature</a></ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <div class=\"ion-text-center ion-padding\">\n    <ion-button>Submit</ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/acceptance-test-procedure/acceptance-test-procedure-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/acceptance-test-procedure/acceptance-test-procedure-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AcceptanceTestProcedurePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptanceTestProcedurePageRoutingModule", function() { return AcceptanceTestProcedurePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _acceptance_test_procedure_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./acceptance-test-procedure.page */ "./src/app/acceptance-test-procedure/acceptance-test-procedure.page.ts");




const routes = [
    {
        path: '',
        component: _acceptance_test_procedure_page__WEBPACK_IMPORTED_MODULE_3__["AcceptanceTestProcedurePage"]
    }
];
let AcceptanceTestProcedurePageRoutingModule = class AcceptanceTestProcedurePageRoutingModule {
};
AcceptanceTestProcedurePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AcceptanceTestProcedurePageRoutingModule);



/***/ }),

/***/ "./src/app/acceptance-test-procedure/acceptance-test-procedure.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/acceptance-test-procedure/acceptance-test-procedure.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AcceptanceTestProcedurePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptanceTestProcedurePageModule", function() { return AcceptanceTestProcedurePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _acceptance_test_procedure_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./acceptance-test-procedure-routing.module */ "./src/app/acceptance-test-procedure/acceptance-test-procedure-routing.module.ts");
/* harmony import */ var _acceptance_test_procedure_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./acceptance-test-procedure.page */ "./src/app/acceptance-test-procedure/acceptance-test-procedure.page.ts");







let AcceptanceTestProcedurePageModule = class AcceptanceTestProcedurePageModule {
};
AcceptanceTestProcedurePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _acceptance_test_procedure_routing_module__WEBPACK_IMPORTED_MODULE_5__["AcceptanceTestProcedurePageRoutingModule"]
        ],
        declarations: [_acceptance_test_procedure_page__WEBPACK_IMPORTED_MODULE_6__["AcceptanceTestProcedurePage"]]
    })
], AcceptanceTestProcedurePageModule);



/***/ }),

/***/ "./src/app/acceptance-test-procedure/acceptance-test-procedure.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/acceptance-test-procedure/acceptance-test-procedure.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY2VwdGFuY2UtdGVzdC1wcm9jZWR1cmUvYWNjZXB0YW5jZS10ZXN0LXByb2NlZHVyZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/acceptance-test-procedure/acceptance-test-procedure.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/acceptance-test-procedure/acceptance-test-procedure.page.ts ***!
  \*****************************************************************************/
/*! exports provided: AcceptanceTestProcedurePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptanceTestProcedurePage", function() { return AcceptanceTestProcedurePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _signature_signature_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signature/signature.page */ "./src/app/signature/signature.page.ts");




let AcceptanceTestProcedurePage = class AcceptanceTestProcedurePage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _signature_signature_page__WEBPACK_IMPORTED_MODULE_3__["SignaturePage"]
            });
            return yield modal.present();
        });
    }
};
AcceptanceTestProcedurePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
AcceptanceTestProcedurePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-acceptance-test-procedure',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./acceptance-test-procedure.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/acceptance-test-procedure/acceptance-test-procedure.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./acceptance-test-procedure.page.scss */ "./src/app/acceptance-test-procedure/acceptance-test-procedure.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], AcceptanceTestProcedurePage);



/***/ })

}]);
//# sourceMappingURL=acceptance-test-procedure-acceptance-test-procedure-module-es2015.js.map