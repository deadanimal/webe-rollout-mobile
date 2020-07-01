(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["work-order-work-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/work-order/work-order.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/work-order/work-order.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Work Order</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        Work Order 333\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-list>\n        <ion-item class=\"nopaddingstart\">\n          <ion-label position=\"stacked\">Vendor Name</ion-label>\n          <ion-input readonly value=\"Pipeline\"></ion-input>\n        </ion-item>\n\n        <ion-item class=\"nopaddingstart\">\n          <ion-label position=\"stacked\">Location</ion-label>\n          <ion-textarea readonly rows=\"2\" value=\"Menara TM, Bangsar\"></ion-textarea>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <div class=\"ion-text-center\">\n    <h3 style=\"color: black; font-weight: bold;\">Checklist</h3>\n  </div>\n\n  <div>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card color=\"danger\">\n            <ion-card-content>\n              <div class=\"ion-text-justify\">\n                Punchlist\n              </div>\n            </ion-card-content>\n            <ion-item lines=\"none\">\n              <ion-icon name=\"alert-circle\" slot=\"start\" size=\"large\" color=\"danger\"></ion-icon>\n              <ion-icon slot=\"end\" size=\"large\" name=\"create\" [routerLink]=\"['/punchlist']\"></ion-icon>\n            </ion-item>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-card color=\"success\">\n            <ion-card-content>\n              <div class=\"ion-text-justify\">\n                Acceptance Test Procedure\n              </div>\n            </ion-card-content>\n            <ion-item lines=\"none\">\n              <ion-icon name=\"checkbox\" slot=\"start\" size=\"large\" color=\"success\"></ion-icon>\n              <ion-icon slot=\"end\" size=\"large\" name=\"eye\" [routerLink]=\"['/acceptance-test-procedure']\"></ion-icon>\n            </ion-item>\n          </ion-card>\n        </ion-col>\n        <ion-col>\n          <ion-card color=\"success\">\n            <ion-card-content>\n              <div class=\"ion-text-justify\">\n                Self Assesment\n              </div>\n            </ion-card-content>\n            <ion-item lines=\"none\">\n              <ion-icon name=\"checkbox\" slot=\"start\" size=\"large\" color=\"success\"></ion-icon>\n              <ion-icon slot=\"end\" size=\"large\" name=\"eye\" [routerLink]=\"['/self-assesment']\"></ion-icon>\n            </ion-item>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/work-order/work-order-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/work-order/work-order-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WorkOrderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderPageRoutingModule", function() { return WorkOrderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _work_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work-order.page */ "./src/app/work-order/work-order.page.ts");




const routes = [
    {
        path: '',
        component: _work_order_page__WEBPACK_IMPORTED_MODULE_3__["WorkOrderPage"]
    }
];
let WorkOrderPageRoutingModule = class WorkOrderPageRoutingModule {
};
WorkOrderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WorkOrderPageRoutingModule);



/***/ }),

/***/ "./src/app/work-order/work-order.module.ts":
/*!*************************************************!*\
  !*** ./src/app/work-order/work-order.module.ts ***!
  \*************************************************/
/*! exports provided: WorkOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderPageModule", function() { return WorkOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _work_order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work-order-routing.module */ "./src/app/work-order/work-order-routing.module.ts");
/* harmony import */ var _work_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work-order.page */ "./src/app/work-order/work-order.page.ts");







let WorkOrderPageModule = class WorkOrderPageModule {
};
WorkOrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _work_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkOrderPageRoutingModule"]
        ],
        declarations: [_work_order_page__WEBPACK_IMPORTED_MODULE_6__["WorkOrderPage"]]
    })
], WorkOrderPageModule);



/***/ }),

/***/ "./src/app/work-order/work-order.page.scss":
/*!*************************************************!*\
  !*** ./src/app/work-order/work-order.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  --ion-grid-padding: 0px;\n}\n\n.nopaddingstart {\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Qcm90b3R5cGUvcHJvdG8tMDAzMC13ZWJlLXJvbGxvdXQtbW9iaWxlL3NyYy9hcHAvd29yay1vcmRlci93b3JrLW9yZGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd29yay1vcmRlci93b3JrLW9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDSSxvQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvd29yay1vcmRlci93b3JrLW9yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwcHg7XG59XG5cbi5ub3BhZGRpbmdzdGFydCB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG4iLCJpb24tZ3JpZCB7XG4gIC0taW9uLWdyaWQtcGFkZGluZzogMHB4O1xufVxuXG4ubm9wYWRkaW5nc3RhcnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/work-order/work-order.page.ts":
/*!***********************************************!*\
  !*** ./src/app/work-order/work-order.page.ts ***!
  \***********************************************/
/*! exports provided: WorkOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderPage", function() { return WorkOrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WorkOrderPage = class WorkOrderPage {
    constructor() { }
    ngOnInit() {
    }
};
WorkOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work-order.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/work-order/work-order.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work-order.page.scss */ "./src/app/work-order/work-order.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WorkOrderPage);



/***/ })

}]);
//# sourceMappingURL=work-order-work-order-module-es2015.js.map