function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"air-selangor-toolbar\">\n    <div class=\"ion-text-center ion-padding-top\" style=\"font-weight: bold;\">\n      WORK ORDER INFORMATION\n    </div>\n    <ion-segment [(ngModel)]=\"type\">\n      <ion-segment-button value=\"pending\">\n        <ion-label color=\"light\" style=\"font-weight: bold;\">Pending</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"approval\">\n        <ion-label color=\"light\" style=\"font-weight: bold;\">Approval</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]=\"type\">\n    <div *ngSwitchCase=\"'pending'\">\n      <div>\n        <ion-card *ngFor=\"let pending of pendings\">\n          <ion-card-header>\n            <ion-card-subtitle class=\"ion-padding-bottom\">\n              <div class=\"ion-float-left\">\n                <ion-badge [color]=\"pending.type == 'CM' ? 'danger' : 'warning'\"\n                  >{{ pending.type }}</ion-badge\n                >\n              </div>\n              <div class=\"ion-float-right\">\n                <ion-badge [color]=\"pending.type == 'CM' ? 'danger' : 'warning'\"\n                  >{{ pending.date }}</ion-badge\n                >\n              </div>\n            </ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <div class=\"ion-text-justify\">\n              {{ pending.desc }}\n            </div>\n            <div class=\"ion-text-end ion-padding-top\">\n              <ion-button fill=\"clear\" [routerLink]=\"['/work-order']\">\n                <ion-icon slot=\"icon-only\" name=\"build\"></ion-icon>\n              </ion-button>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'approval'\">\n      <ion-card *ngFor=\"let approval of approvals\">\n        <ion-card-header\n          *ngIf=\"approval.status == 'approve' || approval.status == 'reject'\"\n        >\n          <ion-card-subtitle class=\"ion-padding-bottom\">\n            <div class=\"ion-float-left\">\n              <ion-badge\n                [color]=\"approval.status == 'approve' ? 'success' : 'danger'\"\n                >{{ approval.status }}</ion-badge\n              >\n            </div>\n            <div class=\"ion-float-right\">\n              <ion-badge\n                [color]=\"approval.status == 'approve' ? 'success' : 'danger'\"\n                >{{ approval.approvalDate }}</ion-badge\n              >\n            </div>\n          </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content\n          *ngIf=\"approval.status == 'approve' || approval.status == 'reject'\"\n        >\n          <h1 style=\"color: black; font-weight: bold;\">{{ approval.approvalID }}</h1>\n          <div class=\"ion-text-justify\">\n            {{ approval.approvalBy }}\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }, {// path: 'work-order',
      // loadChildren: () => import('../work-order/work-order.module').then( m => m.WorkOrderPageModule)
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | profile-profile-module */
        "profile-profile-module").then(__webpack_require__.bind(null,
        /*! ../profile/profile.module */
        "./src/app/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      }
    }, {
      path: 'asset-detail',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | asset-detail-asset-detail-module */
        [__webpack_require__.e("common"), __webpack_require__.e("asset-detail-asset-detail-module")]).then(__webpack_require__.bind(null,
        /*! ../asset-detail/asset-detail.module */
        "./src/app/asset-detail/asset-detail.module.ts")).then(function (m) {
          return m.AssetDetailPageModule;
        });
      }
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-segment-button {\n  --indicator-color: white;\n  --indicator-height: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Qcm90b3R5cGUvcHJvdG8tMDAzMC13ZWJlLXJvbGxvdXQtbW9iaWxlL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EsdUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDNweDtcbn0iLCJpb24tc2VnbWVudC1idXR0b24ge1xuICAtLWluZGljYXRvci1jb2xvcjogd2hpdGU7XG4gIC0taW5kaWNhdG9yLWhlaWdodDogM3B4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(auth) {
        _classCallCheck(this, HomePage);

        this.auth = auth;
        this.type = "pending"; // lists

        this.pendings = [{
          type: "Pending",
          date: "29 February 2020",
          desc: "This need to be approved before 8 March 2020....."
        }, {
          type: "Pending",
          date: "12 February 2020",
          desc: "Work order have been done and need to be approve by....."
        }, {
          type: "Pending",
          date: "8 February 2020",
          desc: "Please approved this because this is urgent by....."
        }];
        this.approvals = [{
          approvalID: 'DOC123',
          approvalDate: '2020-03-03',
          approvalBy: 'Dato Ali bin Abi Talib',
          status: 'approve'
        }, {
          approvalID: 'DOC333',
          approvalDate: '2020-03-02',
          approvalBy: 'Ir Dr Tan Cheng Lock',
          status: 'reject'
        }, {
          approvalID: 'DOC555',
          approvalDate: '2020-03-01',
          approvalBy: 'Mr Michael',
          status: 'approve'
        }];
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.role = this.auth.getRole();
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map