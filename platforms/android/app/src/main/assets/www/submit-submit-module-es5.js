function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["submit-submit-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/submit/submit.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/submit/submit.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSubmitSubmitPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <div class=\"ion-text-center\" style=\"font-weight: bold;\">\n      SUBMIT\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let asset of assets\">\n    <ion-card-header>\n      <ion-card-title>Asset ID: {{ asset.assetId }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Action: {{ asset.action }}</p>\n      <p>Asset Name: {{ asset.assetName }}</p>\n      <p>Asset Location: {{ asset.assetLocation }}</p>\n\n      <div class=\"ion-padding\">\n        <div class=\"ion-float-left\">\n          <ion-button fill=\"clear\" [routerLink]=\"['/asset-detail']\">\n            <ion-icon slot=\"icon-only\" name=\"build\" ></ion-icon>\n          </ion-button>\n        </div>\n        <div class=\"ion-float-right\">\n          <ion-button fill=\"clear\">\n            <ion-icon slot=\"icon-only\" name=\"trash\" color=\"danger\"></ion-icon>\n          </ion-button>\n        </div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <div class=\"ion-text-center ion-padding\">\n    <ion-button>Submit</ion-button>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/submit/submit-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/submit/submit-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: SubmitPageRoutingModule */

  /***/
  function srcAppSubmitSubmitRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubmitPageRoutingModule", function () {
      return SubmitPageRoutingModule;
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


    var _submit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./submit.page */
    "./src/app/submit/submit.page.ts");

    var routes = [{
      path: '',
      component: _submit_page__WEBPACK_IMPORTED_MODULE_3__["SubmitPage"]
    }];

    var SubmitPageRoutingModule = function SubmitPageRoutingModule() {
      _classCallCheck(this, SubmitPageRoutingModule);
    };

    SubmitPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SubmitPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/submit/submit.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/submit/submit.module.ts ***!
    \*****************************************/

  /*! exports provided: SubmitPageModule */

  /***/
  function srcAppSubmitSubmitModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubmitPageModule", function () {
      return SubmitPageModule;
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


    var _submit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./submit-routing.module */
    "./src/app/submit/submit-routing.module.ts");
    /* harmony import */


    var _submit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./submit.page */
    "./src/app/submit/submit.page.ts");

    var SubmitPageModule = function SubmitPageModule() {
      _classCallCheck(this, SubmitPageModule);
    };

    SubmitPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _submit_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubmitPageRoutingModule"]],
      declarations: [_submit_page__WEBPACK_IMPORTED_MODULE_6__["SubmitPage"]]
    })], SubmitPageModule);
    /***/
  },

  /***/
  "./src/app/submit/submit.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/submit/submit.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSubmitSubmitPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Ym1pdC9zdWJtaXQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/submit/submit.page.ts":
  /*!***************************************!*\
    !*** ./src/app/submit/submit.page.ts ***!
    \***************************************/

  /*! exports provided: SubmitPage */

  /***/
  function srcAppSubmitSubmitPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubmitPage", function () {
      return SubmitPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SubmitPage =
    /*#__PURE__*/
    function () {
      function SubmitPage() {
        _classCallCheck(this, SubmitPage);

        this.assets = [{
          assetId: "123-XX",
          action: "Asset Registration",
          assetName: "Pump",
          assetLocation: "TAMAN DAHLIA PUMP HOUSE"
        }, {
          assetId: "125-KP",
          action: "Asset Return",
          assetName: "Valve",
          assetLocation: "TAMAN DAHLIA PUMP HOUSE"
        }, {
          assetId: "999-ZZ",
          action: "Retire",
          assetName: "Pump",
          assetLocation: "TAMAN DAHLIA PUMP HOUSE"
        }];
      }

      _createClass(SubmitPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SubmitPage;
    }();

    SubmitPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-submit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./submit.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/submit/submit.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./submit.page.scss */
      "./src/app/submit/submit.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SubmitPage);
    /***/
  }
}]);
//# sourceMappingURL=submit-submit-module-es5.js.map