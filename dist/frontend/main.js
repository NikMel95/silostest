(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: SilosTowerAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SilosTowerAPI", function() { return SilosTowerAPI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var SilosTowerAPI = /** @class */ (function () {
    function SilosTowerAPI(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = '';
    }
    SilosTowerAPI.prototype.getTowers = function () {
        var _this = this;
        return this.httpClient.get(this.API_URL + "/api/towers").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            _this.towers = res['towers'];
            return _this.towers;
        }));
    };
    SilosTowerAPI = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SilosTowerAPI);
    return SilosTowerAPI;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.indicator__list {\r\n  font-size: 0;\r\n  text-align: center;\r\n  width: 1392px;\r\n  margin: auto;\r\n}\r\n.indicator__list-item {\r\n  width: 154px;\r\n  display: inline-block;\r\n  vertical-align: bottom;\r\n  margin: 0 10px;\r\n}\r\n.indicator__list-item-title {\r\n  font-size: 14px;\r\n  text-align: center;\r\n}\r\n.indicator__list-item-value {\r\n  text-align: center;\r\n  font-size: 26px;\r\n  position: relative;\r\n  padding-bottom: 6px;\r\n  line-height: 1;\r\n  margin-top: 20px;\r\n}\r\n.indicator__list-item-value:after {\r\n  content: '';\r\n  height: 4px;\r\n  width: 80px;\r\n  margin: auto;\r\n  left: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n.indicator__list-item-value.success:after {\r\n  background: #21b149;\r\n}\r\n.indicator__list-item-value.error:after {\r\n  background: red;\r\n}\r\n.indicator__list-item-tank {\r\n  position: relative;\r\n  margin-top: 40px;\r\n}\r\n.indicator__list-item-tank:before {\r\n  content: '';\r\n  position: absolute;\r\n  background: #8b959e;\r\n  width: 60px;\r\n  height: 4px;\r\n  margin: auto;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  top: -18px;\r\n}\r\n.indicator__list-item-tank-part {\r\n  width: 137px;\r\n  height: 92px;\r\n  margin: auto;\r\n  margin-bottom: 14px;\r\n  background: linear-gradient(to right, #616166 5%, #9b9b9b 25%, #818183, #4b4b52);\r\n}\r\n.indicator__list-item-tank-label {\r\n  height: 4px;\r\n  width: 100%;\r\n  position: absolute;\r\n  background: #CBCBCB;\r\n  z-index: 3;\r\n}\r\n.indicator__list-item-tank-label.label1 {\r\n  top: -9px;\r\n}\r\n.indicator__list-item-tank-label.label2 {\r\n  top: 97px;\r\n}\r\n.indicator__list-item-tank-label.label3 {\r\n  top: 203px;\r\n}\r\n.indicator__list-item-tank-label.label4 {\r\n  top: 309px;\r\n}\r\n.indicator__list-item-tank-label.label5 {\r\n  bottom: -9px;\r\n}\r\n.indicator__list-item-tank-value {\r\n  width: 118px;\r\n  opacity: .5;\r\n  background: #21B249;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  bottom: 4px;\r\n  z-index: 2;\r\n  transition: all .3s;\r\n}\r\n.indicator__list-item-funnel {\r\n  background: linear-gradient(to right, #616166 5%, #9b9b9b 25%, #818183, #4b4b52);\r\n  height: 80px;\r\n  width: 137px;\r\n  margin: auto;\r\n  position: relative;\r\n}\r\n.indicator__list-item-funnel:after,\r\n.indicator__list-item-funnel:before {\r\n  content: '';\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  top: 0;\r\n  border-bottom: 80px solid #2d2e32;\r\n}\r\n.indicator__list-item-funnel:before {\r\n  border-right: 55px solid transparent;\r\n  left: 0;\r\n}\r\n.indicator__list-item-funnel:after {\r\n  border-left: 55px solid transparent;\r\n  right: 0;\r\n}\r\n.indicator__list-item-funnel .elem {\r\n  border: 3px solid #2caf4f;\r\n  position: absolute;\r\n  left: 10px;\r\n  top: 50%;\r\n  border-radius: 10px;\r\n  height: 35px;\r\n  width: 65px;\r\n  margin-top: -17px;\r\n  z-index: 2;\r\n}\r\n.indicator__list-item-cont-title {\r\n  font-size: 14px;\r\n  margin-top: 20px;\r\n  line-height: 1;\r\n}\r\n.indicator__list-item-cont-value {\r\n  font-size: 26px;\r\n  position: relative;\r\n  margin-top: 8px;\r\n  padding-bottom: 5px;\r\n  line-height: 1;\r\n}\r\n.indicator__list-item-cont-value:after {\r\n  content: '';\r\n  height: 4px;\r\n  width: 80px;\r\n  margin: auto;\r\n  left: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  bottom: 0;\r\n  background: #21b149;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFVBQVU7Q0FDWDtBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0VBQ1QsYUFBYTtFQUNiLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGlGQUFpRjtDQUNsRjtBQUNEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsVUFBVTtDQUNYO0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7QUFDRDtFQUNFLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsV0FBVztDQUNaO0FBQ0Q7RUFDRSxhQUFhO0NBQ2Q7QUFDRDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUdYLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsaUZBQWlGO0VBQ2pGLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjtBQUNEOztFQUVFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFVBQVU7RUFDVixPQUFPO0VBQ1Asa0NBQWtDO0NBQ25DO0FBQ0Q7RUFDRSxxQ0FBcUM7RUFDckMsUUFBUTtDQUNUO0FBQ0Q7RUFDRSxvQ0FBb0M7RUFDcEMsU0FBUztDQUNWO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaW5kaWNhdG9yX19saXN0IHtcclxuICBmb250LXNpemU6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMzkycHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5pbmRpY2F0b3JfX2xpc3QtaXRlbSB7XHJcbiAgd2lkdGg6IDE1NHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcbi5pbmRpY2F0b3JfX2xpc3QtaXRlbS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW5kaWNhdG9yX19saXN0LWl0ZW0tdmFsdWUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uaW5kaWNhdG9yX19saXN0LWl0ZW0tdmFsdWU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbn1cclxuLmluZGljYXRvcl9fbGlzdC1pdGVtLXZhbHVlLnN1Y2Nlc3M6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMyMWIxNDk7XHJcbn1cclxuLmluZGljYXRvcl9fbGlzdC1pdGVtLXZhbHVlLmVycm9yOmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiByZWQ7XHJcbn1cclxuLmluZGljYXRvcl9fbGlzdC1pdGVtLXRhbmsge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcbi5pbmRpY2F0b3JfX2xpc3QtaXRlbS10YW5rOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6ICM4Yjk1OWU7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRvcDogLTE4cHg7XHJcbn1cclxuLmluZGljYXRvcl9fbGlzdC1pdGVtLXRhbmstcGFydCB7XHJcbiAgd2lkdGg6IDEzN3B4O1xyXG4gIGhlaWdodDogOTJweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2MTYxNjYgNSUsICM5YjliOWIgMjUlLCAjODE4MTgzLCAjNGI0YjUyKTtcclxufVxyXG4uaW5kaWNhdG9yX19saXN0LWl0ZW0tdGFuay1sYWJlbCB7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6ICNDQkNCQ0I7XHJcbiAgei1pbmRleDogMztcclxufVxyXG4uaW5kaWNhdG9yX19saXN0LWl0ZW0tdGFuay1sYWJlbC5sYWJlbDEge1xyXG4gIHRvcDogLTlweDtcclxufVxyXG4uaW5kaWNhdG9yX19saXN0LWl0ZW0tdGFuay1sYWJlbC5sYWJlbDIge1xyXG4gIHRvcDogOTdweDtcclxufVxyXG4uaW5kaWNhdG9yX19saXN0LWl0ZW0tdGFuay1sYWJlbC5sYWJlbDMge1xyXG4gIHRvcDogMjAzcHg7XHJcbn1cclxuLmluZGljYXRvcl9fbGlzdC1pdGVtLXRhbmstbGFiZWwubGFiZWw0IHtcclxuICB0b3A6IDMwOXB4O1xyXG59XHJcbi5pbmRpY2F0b3JfX2xpc3QtaXRlbS10YW5rLWxhYmVsLmxhYmVsNSB7XHJcbiAgYm90dG9tOiAtOXB4O1xyXG59XHJcbi5pbmRpY2F0b3JfX2xpc3QtaXRlbS10YW5rLXZhbHVlIHtcclxuICB3aWR0aDogMTE4cHg7XHJcbiAgb3BhY2l0eTogLjU7XHJcbiAgYmFja2dyb3VuZDogIzIxQjI0OTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm90dG9tOiA0cHg7XHJcbiAgei1pbmRleDogMjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG59XHJcbi5pbmRpY2F0b3JfX2xpc3QtaXRlbS1mdW5uZWwge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzYxNjE2NiA1JSwgIzliOWI5YiAyNSUsICM4MTgxODMsICM0YjRiNTIpO1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogMTM3cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaW5kaWNhdG9yX19saXN0LWl0ZW0tZnVubmVsOmFmdGVyLFxyXG4uaW5kaWNhdG9yX19saXN0LWl0ZW0tZnVubmVsOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogODBweCBzb2xpZCAjMmQyZTMyO1xyXG59XHJcbi5pbmRpY2F0b3JfX2xpc3QtaXRlbS1mdW5uZWw6YmVmb3JlIHtcclxuICBib3JkZXItcmlnaHQ6IDU1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgbGVmdDogMDtcclxufVxyXG4uaW5kaWNhdG9yX19saXN0LWl0ZW0tZnVubmVsOmFmdGVyIHtcclxuICBib3JkZXItbGVmdDogNTVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICByaWdodDogMDtcclxufVxyXG4uaW5kaWNhdG9yX19saXN0LWl0ZW0tZnVubmVsIC5lbGVtIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjMmNhZjRmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHdpZHRoOiA2NXB4O1xyXG4gIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmluZGljYXRvcl9fbGlzdC1pdGVtLWNvbnQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbi5pbmRpY2F0b3JfX2xpc3QtaXRlbS1jb250LXZhbHVlIHtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbi5pbmRpY2F0b3JfX2xpc3QtaXRlbS1jb250LXZhbHVlOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBoZWlnaHQ6IDRweDtcclxuICB3aWR0aDogODBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6ICMyMWIxNDk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"indicator__list\" >\n  <div class=\"indicator__list-item\" *ngFor=\"let item of towers;\">\n    <div class=\"indicator__list-item-title\">{{ item.title }}</div>\n    <div [ngClass]=\"'indicator__list-item-value ' + getStatus(item.value, item.minValue, item.maxValue)\">{{ getPercentTower(item.value, item.minValue, item.maxValue).toFixed(0) }}%</div>\n    <div class=\"indicator__list-item-tank\">\n      <div class=\"indicator__list-item-tank-part\"></div>\n      <div class=\"indicator__list-item-tank-part\"></div>\n      <div class=\"indicator__list-item-tank-part\"></div>\n      <div class=\"indicator__list-item-tank-part\"></div>\n      <div class=\"indicator__list-item-tank-label label1\"></div>\n      <div class=\"indicator__list-item-tank-label label2\"></div>\n      <div class=\"indicator__list-item-tank-label label3\"></div>\n      <div class=\"indicator__list-item-tank-label label4\"></div>\n      <div class=\"indicator__list-item-tank-label label5\"></div>\n      <div class=\"indicator__list-item-tank-value\" [ngStyle]=\"{'height': getHeightIndicator(item.value, item.minValue, item.maxValue) == 0 ? '0px' : 'calc(' + getHeightIndicator(item.value, item.minValue, item.maxValue).toFixed(2) + '% - 8px)'}\"></div>\n    </div>\n    <div class=\"indicator__list-item-funnel\"><div class=\"elem\"></div></div>\n    <div class=\"indicator__list-item-cont\">\n      <div class=\"indicator__list-item-cont-title\">Масса карналита</div>\n      <div class=\"indicator__list-item-cont-value\">{{ formatNumbSpace(item.value) }}</div>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(apiService) {
        this.apiService = apiService;
        this.title = 'frontend';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getTowers();
    };
    AppComponent.prototype.getTowers = function () {
        var _this = this;
        this.apiService.getTowers().subscribe(function (data) {
            _this.towers = data;
        });
    };
    AppComponent.prototype.formatNumbSpace = function (num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };
    AppComponent.prototype.getStatus = function (value, min, max) {
        if (value >= min && value <= max)
            return 'success';
        else if (value < min || value > max)
            return 'error';
    };
    AppComponent.prototype.getPercentTower = function (value, min, max) {
        return value * 100 / (max - min);
    };
    AppComponent.prototype.getHeightIndicator = function (value, min, max) {
        if (value >= min && value <= max)
            return this.getPercentTower(value, min, max);
        else if (value > max)
            return 100;
        else
            return 0;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["SilosTowerAPI"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nikita\Desktop\ng\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map