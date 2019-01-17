webpackJsonp([0],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorarioDiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_horarios_loader_horarios_loader__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HorarioDiaPage = /** @class */ (function () {
    function HorarioDiaPage(horasProv, navParams) {
        this.horasProv = horasProv;
        this.navParams = navParams;
        this.dia = null;
        this.colors1 = ['#037006', '#6e7003', '#720b03'];
        this.colors2 = ['#090270', '#037006', '#6e7003'];
        this.dia = this.navParams.get('id');
        if (!this.horasProv.horarioInfo && !this.horasProv.isLoading)
            this.horasProv.loadArtist();
    }
    HorarioDiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-horario-dia',template:/*ion-inline-start:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\horario-dia\horario-dia.html"*/'<ion-content>\n  <horario-timeline *ngIf="horasProv.horarioInfo" [events]="horasProv.horarioInfo.dias[dia].slots" [color1]="colors1[dia]" [color2]="colors2[dia]" [es1Name]="horasProv.horarioInfo.escenarios[0]" [es2Name]="horasProv.horarioInfo.escenarios[1]"></horario-timeline>\n</ion-content>\n'/*ion-inline-end:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\horario-dia\horario-dia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_horarios_loader_horarios_loader__["a" /* HorariosLoaderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], HorarioDiaPage);
    return HorarioDiaPage;
}());

//# sourceMappingURL=horario-dia.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorariosLoaderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HorariosLoaderProvider = /** @class */ (function () {
    function HorariosLoaderProvider(http) {
        this.http = http;
        this.tOut = 7500;
        this.horarioInfo = null;
        this.isLoading = false;
        this.errLoading = false;
    }
    HorariosLoaderProvider.prototype.loadArtist = function () {
        var _this = this;
        this.horarioInfo = null;
        this.isLoading = true;
        return this.http.get('./assets/data/horarios.json').pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["timeout"])(this.tOut)).toPromise().then(function (data) {
            _this.horarioInfo = data;
            _this.isLoading = false;
            return data;
        }).catch(function (err) {
            _this.errLoading = true;
        });
    };
    HorariosLoaderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HorariosLoaderProvider);
    return HorariosLoaderProvider;
}());

//# sourceMappingURL=horarios-loader.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pages__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__posts_posts__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_entrada_entrada__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pagina_pagina__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_image_viewer_image_viewer__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var imageTypes = ['jpg', 'png', 'jpeg', 'gif'];
var newTabTypes = ['pdf', 'txt'];
var customRedirect = {
    '/#entradas2019': {
        url: 'venta-entradas',
        params: {}
    },
    '/entradas': {
        url: 'venta-entradas',
        params: {}
    },
    '/entradas/': {
        url: 'venta-entradas',
        params: {}
    },
    '/showrocking-2018/': {
        url: 'show-rocking',
        params: {}
    },
    '/artistas/': {
        url: 'artistas',
        params: {}
    }
};
var LinkerProvider = /** @class */ (function () {
    function LinkerProvider(pages, posts, toastCtrl, app) {
        this.pages = pages;
        this.posts = posts;
        this.toastCtrl = toastCtrl;
        this.app = app;
    }
    LinkerProvider.prototype.findParent = function (tagname, el) {
        while (el) {
            if ((el.nodeName || el.tagName).toLowerCase() === tagname.toLowerCase()) {
                return el;
            }
            el = el.parentNode;
        }
        return null;
    };
    LinkerProvider.prototype.init = function () {
        var _this = this;
        document.body.addEventListener('click', function (e) {
            var nav = _this.app.getActiveNavs()[0];
            var a = _this.findParent('a', e.target);
            if (a && a.href) {
                // any custom pages
                if (a.href.startsWith('http://portamerica.es') || a.href.startsWith('https://portamerica.es')) {
                    //console.log('app open: ' + a.href);
                    var slug = a.href.replace('http://portamerica.es', '').replace('https://portamerica.es', '');
                    var extension = slug.split('.').pop();
                    if (customRedirect[slug]) {
                        nav.push(customRedirect[slug].url);
                    }
                    else if (imageTypes.indexOf(extension.toLocaleLowerCase()) != -1) {
                        _this.openImage(a.href);
                    }
                    else if (newTabTypes.indexOf(extension.toLocaleLowerCase()) != -1) {
                        window.open(a.href, '_blank');
                    }
                    else {
                        var toast_1 = _this.toastCtrl.create({
                            message: 'Cargando...',
                            cssClass: 'loadingToast'
                        });
                        toast_1.present();
                        Promise.all([_this.posts.getPostBySlug(slug), _this.pages.getPageBySlug(slug)]).then(function (values) {
                            // console.log(values);
                            if (values[0].length) {
                                nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_entrada_entrada__["a" /* EntradaPage */], { id: values[0][0].id, data: values[0][0] });
                            }
                            else if (values[1].length) {
                                nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_pagina_pagina__["a" /* PaginaPage */], { id: values[1][0].id, data: values[1][0] });
                            }
                            toast_1.dismiss();
                        }).catch(function (err) {
                            console.log(err);
                            toast_1.dismiss();
                            _this.toastCtrl.create({
                                message: 'No se ha podido obtener la información',
                                duration: 2000,
                                closeButtonText: "OK",
                                showCloseButton: true
                            }).present();
                        });
                    }
                }
                else
                    window.open(a.href, '_blank');
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
            else {
                var btn = _this.findParent('button', e.target);
                if (btn && btn.getAttribute('href')) {
                    if (btn.getAttribute('href').startsWith('http://portamerica.es') || btn.getAttribute('href').startsWith('https://portamerica.es')) {
                        //console.log('app open: ' + btn.getAttribute('href'));
                        var slug = btn.getAttribute('href').replace('http://portamerica.es', '').replace('https://portamerica.es', '');
                        var extension = slug.split('.').pop();
                        //console.log(extension);
                        if (customRedirect[slug]) {
                            nav.push(customRedirect[slug].url);
                        }
                        else if (imageTypes.indexOf(extension.toLocaleLowerCase()) != -1) {
                            _this.openImage(btn.getAttribute('href'));
                        }
                        else if (newTabTypes.indexOf(extension.toLocaleLowerCase()) != -1) {
                            window.open(btn.getAttribute('href'), '_blank');
                        }
                        else {
                            var toast_2 = _this.toastCtrl.create({
                                message: 'Cargando...',
                                cssClass: 'loadingToast'
                            });
                            toast_2.present();
                            Promise.all([_this.posts.getPostBySlug(slug), _this.pages.getPageBySlug(slug)]).then(function (values) {
                                // console.log(values);
                                if (values[0].length) {
                                    nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_entrada_entrada__["a" /* EntradaPage */], { id: values[0][0].id, data: values[0][0] });
                                }
                                else if (values[1].length) {
                                    nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_pagina_pagina__["a" /* PaginaPage */], { id: values[1][0].id, data: values[1][0] });
                                }
                                else {
                                    //error
                                }
                                toast_2.dismiss();
                            }).catch(function (err) {
                                console.log(err);
                                toast_2.dismiss();
                                _this.toastCtrl.create({
                                    message: 'No se ha podido obtener la información',
                                    duration: 2000,
                                    closeButtonText: "OK",
                                    showCloseButton: true
                                }).present();
                            });
                        }
                    }
                    else
                        window.open(btn.getAttribute('href'), '_blank');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }
                else {
                    var img = _this.findParent('img', e.target);
                    if (img && img.getAttribute('href')) {
                        if (img.getAttribute('href').startsWith('http://portamerica.es') || img.getAttribute('href').startsWith('https://portamerica.es')) {
                            //console.log('app open: ' + img.getAttribute('href'));
                            var slug = img.getAttribute('href').replace('http://portamerica.es', '').replace('https://portamerica.es', '');
                            var extension = slug.split('.').pop();
                            //console.log(extension);
                            if (customRedirect[slug]) {
                                nav.push(customRedirect[slug].url);
                            }
                            else if (imageTypes.indexOf(extension.toLocaleLowerCase()) != -1) {
                                _this.openImage(img.getAttribute('href'));
                            }
                            else if (newTabTypes.indexOf(extension.toLocaleLowerCase()) != -1) {
                                window.open(img.getAttribute('href'), '_blank');
                            }
                            else {
                                var toast_3 = _this.toastCtrl.create({
                                    message: 'Cargando...',
                                    cssClass: 'loadingToast'
                                });
                                toast_3.present();
                                Promise.all([_this.posts.getPostBySlug(slug), _this.pages.getPageBySlug(slug)]).then(function (values) {
                                    // console.log(values);
                                    if (values[0].length) {
                                        nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_entrada_entrada__["a" /* EntradaPage */], { id: values[0][0].id, data: values[0][0] });
                                    }
                                    else if (values[1].length) {
                                        nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_pagina_pagina__["a" /* PaginaPage */], { id: values[1][0].id, data: values[1][0] });
                                    }
                                    else {
                                        //error
                                    }
                                    toast_3.dismiss();
                                }).catch(function (err) {
                                    console.log(err);
                                    toast_3.dismiss();
                                    _this.toastCtrl.create({
                                        message: 'No se ha podido obtener la información',
                                        duration: 2000,
                                        closeButtonText: "OK",
                                        showCloseButton: true
                                    }).present();
                                });
                            }
                        }
                        else
                            window.open(img.getAttribute('href'), '_blank');
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    }
                    else if (e.target.tagName == 'WP-GALLERY' && e.path[0] && e.path[0].tagName == 'IMG') {
                        if (e.path[0].src.startsWith('http://portamerica.es') || e.path[0].src.startsWith('https://portamerica.es')) {
                            _this.openImage(e.path[0].src);
                        }
                        else {
                            window.open(e.path[0].src, '_blank');
                        }
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    }
                }
            }
            return true;
        });
    };
    LinkerProvider.prototype.openImage = function (src) {
        var nav = this.app.getActiveNavs()[0];
        if (nav) {
            nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_image_viewer_image_viewer__["a" /* ImageViewerPage */], { src: src });
        }
    };
    LinkerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__pages_pages__["a" /* PagesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__posts_posts__["a" /* PostsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], LinkerProvider);
    return LinkerProvider;
}());

//# sourceMappingURL=linker.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PagesProvider = /** @class */ (function () {
    function PagesProvider(http) {
        this.http = http;
        this.tOut = 7500;
    }
    PagesProvider.prototype.getPageBySlug = function (slug) {
        return this.http.get('https://portamerica.es/wp-json/wp/v2/pages?_embed&slug=' + encodeURI(slug)).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["timeout"])(this.tOut)).toPromise();
    };
    PagesProvider.prototype.getPage = function (id) {
        return this.http.get('https://portamerica.es/wp-json/wp/v2/pages/' + id + '?_embed').pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["timeout"])(this.tOut)).toPromise();
    };
    PagesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PagesProvider);
    return PagesProvider;
}());

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_viewer_transition_gesture__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image_viewer_zoom_gesture__ = __webpack_require__(423);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageViewerPage = /** @class */ (function () {
    function ImageViewerPage(navCtrl, _gestureCtrl, navParams, _zone, platform, domCtrl, renderer) {
        this.navCtrl = navCtrl;
        this._gestureCtrl = _gestureCtrl;
        this.navParams = navParams;
        this._zone = _zone;
        this.platform = platform;
        this.domCtrl = domCtrl;
        this.renderer = renderer;
    }
    ImageViewerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.imageUrl = this.navParams.get('src');
        var navPop = function () { return _this.navCtrl.pop(); };
        this._zone.runOutsideAngular(function () { return _this.dragGesture = new __WEBPACK_IMPORTED_MODULE_2__image_viewer_transition_gesture__["a" /* ImageViewerTransitionGesture */](_this.platform, _this, _this.domCtrl, _this.renderer, navPop); });
        this._zone.runOutsideAngular(function () { return _this.pinchGesture = new __WEBPACK_IMPORTED_MODULE_3__image_viewer_zoom_gesture__["a" /* ImageViewerZoomGesture */](_this, _this.imageContainer, _this.platform, _this.renderer); });
    };
    ImageViewerPage.prototype.getNativeElement = function () {
        return this.container.nativeElement;
    };
    ImageViewerPage.prototype.ionViewDidLeave = function () {
        this.dragGesture && this.dragGesture.destroy();
        this.pinchGesture && this.pinchGesture.destroy();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ImageViewerPage.prototype, "container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('imageContainer'),
        __metadata("design:type", Object)
    ], ImageViewerPage.prototype, "imageContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('image'),
        __metadata("design:type", Object)
    ], ImageViewerPage.prototype, "image", void 0);
    ImageViewerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-image-viewer',template:/*ion-inline-start:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\image-viewer\image-viewer.html"*/'<div #container class="imageContainer">\n  <ion-header no-border>\n    <ion-navbar color="dark">\n        <ion-title>Visor de Imágenes</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-backdrop style="opacity: 1;"></ion-backdrop>\n  <div class="image-wrapper">\n    <div class="image" #imageContainer>\n      <img [src]="imageUrl" tappable #image />\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\image-viewer\image-viewer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* GestureController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* DomController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */]])
    ], ImageViewerPage);
    return ImageViewerPage;
}());

//# sourceMappingURL=image-viewer.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistLoaderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistLoaderProvider = /** @class */ (function () {
    function ArtistLoaderProvider(http) {
        this.http = http;
        this.tOut = 7500;
        this.artistas = [];
    }
    ArtistLoaderProvider.prototype.filterArtist = function (searchTern) {
        return (searchTern) ? this.artistas.filter(function (item) { return item.nombre.toLowerCase().indexOf(searchTern) > -1; }) : this.artistas;
    };
    ArtistLoaderProvider.prototype.loadArtist = function () {
        var _this = this;
        return this.http.get('./assets/data/artistas.json').pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["timeout"])(this.tOut)).toPromise().then(function (data) {
            _this.artistas = data.artistas;
            return data;
        });
    };
    ArtistLoaderProvider.prototype.getArtist = function (id) {
        for (var _i = 0, _a = this.artistas; _i < _a.length; _i++) {
            var artist = _a[_i];
            if (artist.id === id)
                return artist;
        }
        return null;
    };
    ArtistLoaderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ArtistLoaderProvider);
    return ArtistLoaderProvider;
}());

//# sourceMappingURL=artist-loader.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoInstallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoInstallPage = /** @class */ (function () {
    function InfoInstallPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    InfoInstallPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    InfoInstallPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-info-install',template:/*ion-inline-start:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\info-install\info-install.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Añadir al inicio</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="dismiss()">\n                <ion-icon name=\'close\'></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <p>Pudes añadir esta web a tu pantalla de inicio como si fuera una app.</p>\n    <h6>Requisitos:</h6>\n    <ul>\n        <li>IOS 11.3 ó superior</li>\n    </ul>\n    <h6>Instrucciones:</h6>\n    <ol>\n        <li>Abrir esta web en safari</li>\n        <li><img src="https://www.netguru.com/hs-fs/hubfs/add_to_homescreen_small.gif?width=300&name=add_to_homescreen_small.gif" /></li>\n    </ol>\n</ion-content>\n<ion-footer>\n    <button ion-button full color="danger" disabled>\n        Presiona <ion-icon name="share"></ion-icon> y después <ion-icon class="ahsbtn" name="add"></ion-icon>\n    </button>\n</ion-footer>'/*ion-inline-end:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\info-install\info-install.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */]])
    ], InfoInstallPage);
    return InfoInstallPage;
}());

//# sourceMappingURL=info-install.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowRockingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowRockingPage = /** @class */ (function () {
    function ShowRockingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShowRockingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-show-rocking',template:/*ion-inline-start:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\show-rocking\show-rocking.html"*/'<ion-header>\n  <ion-navbar color="dark">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>ShowRocking</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <img src="https://portamerica.es/wp-content/uploads/2018/06/showrocking-guia-Repsol-2.jpg"/>\n  <p>La gastronomía fue otra de las grandes protagonistas del festival: el ShowRocking Guía Repsol lo conformó un año más un nutrido grupo de chefs con amplia representación gallega y reconocido prestigio. Más de 28 Soles Repsol que, comisionados por Pepe Solla, hicieron las delicias del público con pinchos gourmet a precios populares.</p>\n  \n  <h2>Galería</h2>\n  <wp-gallery apisrc="https://portamerica.es" images="4815,4816,4817,4818,4819,4820,4821,4822,4823,4824,4825,4826,4827,4828,4829,4830,4831,4832,4833,4834,4835,4836,4838"></wp-gallery>\n</ion-content>\n'/*ion-inline-end:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\show-rocking\show-rocking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], ShowRockingPage);
    return ShowRockingPage;
}());

//# sourceMappingURL=show-rocking.js.map

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 202;

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IosStatusProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { Platform } from 'ionic-angular';
var IosStatusProvider = /** @class */ (function () {
    function IosStatusProvider() {
    }
    /*private TIMEOUT_STATUS = 60000;
    constructor(private platform: Platform) { }*/
    IosStatusProvider.prototype.init = function () {
        /*if (this.platform.is('ios')) {
          const prevUrl = localStorage.getItem('lastUrl');
          if (prevUrl) {
            if (window.location.href !== prevUrl) {
              const curTime = new Date().getTime();
              const lastTime = localStorage.getItem('lastUrlTime');
              if (lastTime) {
                const pastTime = parseInt(lastTime) - curTime;
                if(pastTime < this.TIMEOUT_STATUS) {
                  window.location.href = prevUrl;
                }
                localStorage.removeItem('lastUrlTime');
              }
              
            }
            localStorage.removeItem('lastUrl');
          }
          document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
              console.log('stored: ', document.location.href);
              localStorage.setItem('lastUrl', document.location.href);
              localStorage.setItem('lastUrlTime', new Date().getTime().toString())
            }
          });
        }*/
    };
    IosStatusProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], IosStatusProvider);
    return IosStatusProvider;
}());

//# sourceMappingURL=ios-status.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoSleepProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoSleepProvider = /** @class */ (function () {
    function NoSleepProvider() {
        this.noSleep = null;
        this.enabled = false;
        this.noSleep = new NoSleep();
    }
    NoSleepProvider.prototype.enable = function () {
        this.noSleep.enable();
        this.enabled = true;
    };
    NoSleepProvider.prototype.disable = function () {
        this.noSleep.disable();
        this.enabled = false;
    };
    NoSleepProvider.prototype.isEnabled = function () {
        return this.enabled;
    };
    NoSleepProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NoSleepProvider);
    return NoSleepProvider;
}());

//# sourceMappingURL=no-sleep.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__html_sanitizer_html_sanitizer__ = __webpack_require__(427);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__html_sanitizer_html_sanitizer__["a" /* HtmlSanitizerPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__html_sanitizer_html_sanitizer__["a" /* HtmlSanitizerPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_viewer_directive__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__image_viewer_directive__["a" /* ImageViewerDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__image_viewer_directive__["a" /* ImageViewerDirective */]
            ],
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(279);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_posts_posts__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_backbutton_backbutton__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_blog_blog_module__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_entrada_entrada_module__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_inicio_inicio_module__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_inicio_inicio__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_blog_blog__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_entrada_entrada__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_not_found_not_found_module__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_pagina_pagina_module__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_pages_pages__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_ios_status_ios_status__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_linker_linker__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_pagina_pagina__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_visual_composer_visual_composer__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_venta_entradas_venta_entradas_module__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_venta_entradas_venta_entradas__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_lenguaje_lenguaje__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_artistas_artistas_module__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_artistas_artistas__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_artist_loader_artist_loader__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_artista_artista_module__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_artista_artista__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_como_llegar_como_llegar__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_como_llegar_como_llegar_module__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_image_viewer_image_viewer__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_image_viewer_image_viewer_module__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_horario_dia_horario_dia_module__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_no_sleep_no_sleep__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_horarios_loader_horarios_loader__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_show_rocking_show_rocking_module__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_show_rocking_show_rocking__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_media_loader_media_loader__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_horarios_horarios_module__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_horarios_horarios__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_info_install_info_install_module__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_info_install_info_install__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    preloadModules: true
                }, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_10__pages_inicio_inicio__["a" /* InicioPage */], name: 'inicio', segment: 'inicio' },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_blog_blog__["a" /* BlogPage */], name: 'blog', segment: 'blog' },
                        { component: __WEBPACK_IMPORTED_MODULE_21__pages_venta_entradas_venta_entradas__["a" /* VentaEntradasPage */], name: 'venta-entradas', segment: 'venta-entradas' },
                        { component: __WEBPACK_IMPORTED_MODULE_28__pages_como_llegar_como_llegar__["a" /* ComoLlegarPage */], name: 'como-llegar', segment: 'como-llegar' },
                        { component: __WEBPACK_IMPORTED_MODULE_39__pages_horarios_horarios__["a" /* HorariosPage */], name: 'horarios', segment: 'horarios' },
                        { component: __WEBPACK_IMPORTED_MODULE_36__pages_show_rocking_show_rocking__["a" /* ShowRockingPage */], name: 'show-rocking', segment: 'show-rocking' },
                        { component: __WEBPACK_IMPORTED_MODULE_24__pages_artistas_artistas__["a" /* ArtistasPage */], name: 'artistas', segment: 'artistas' },
                        { component: __WEBPACK_IMPORTED_MODULE_27__pages_artista_artista__["a" /* ArtistaPage */], name: 'artista', segment: 'artista/:id', defaultHistory: [__WEBPACK_IMPORTED_MODULE_24__pages_artistas_artistas__["a" /* ArtistasPage */]] },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_entrada_entrada__["a" /* EntradaPage */], name: 'entrada', segment: 'blog/:id', defaultHistory: [__WEBPACK_IMPORTED_MODULE_11__pages_blog_blog__["a" /* BlogPage */]] },
                        { component: __WEBPACK_IMPORTED_MODULE_18__pages_pagina_pagina__["a" /* PaginaPage */], name: 'pagina', segment: 'pagina/:id', defaultHistory: [__WEBPACK_IMPORTED_MODULE_10__pages_inicio_inicio__["a" /* InicioPage */]] },
                        { component: __WEBPACK_IMPORTED_MODULE_30__pages_image_viewer_image_viewer__["a" /* ImageViewerPage */], name: 'image-viewer', segment: 'image-viewer/:src', defaultHistory: [__WEBPACK_IMPORTED_MODULE_11__pages_blog_blog__["a" /* BlogPage */]] },
                        //{ component: NotFoundPage, name: 'not-found', segment: ':any', defaultHistory: [InicioPage] },
                        { component: __WEBPACK_IMPORTED_MODULE_41__pages_info_install_info_install__["a" /* InfoInstallPage */], name: 'info-install', segment: 'info-install' },
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_inicio_inicio_module__["a" /* InicioPageModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_blog_blog_module__["a" /* BlogPageModule */],
                __WEBPACK_IMPORTED_MODULE_8__pages_entrada_entrada_module__["a" /* EntradaPageModule */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pagina_pagina_module__["a" /* PaginaPageModule */],
                __WEBPACK_IMPORTED_MODULE_13__pages_not_found_not_found_module__["a" /* NotFoundPageModule */],
                __WEBPACK_IMPORTED_MODULE_20__pages_venta_entradas_venta_entradas_module__["a" /* VentaEntradasPageModule */],
                __WEBPACK_IMPORTED_MODULE_23__pages_artistas_artistas_module__["a" /* ArtistasPageModule */],
                __WEBPACK_IMPORTED_MODULE_26__pages_artista_artista_module__["a" /* ArtistaPageModule */],
                __WEBPACK_IMPORTED_MODULE_29__pages_como_llegar_como_llegar_module__["a" /* ComoLlegarPageModule */],
                __WEBPACK_IMPORTED_MODULE_31__pages_image_viewer_image_viewer_module__["a" /* ImageViewerPageModule */],
                __WEBPACK_IMPORTED_MODULE_38__pages_horarios_horarios_module__["a" /* HorariosPageModule */],
                __WEBPACK_IMPORTED_MODULE_32__pages_horario_dia_horario_dia_module__["a" /* HorarioDiaPageModule */],
                __WEBPACK_IMPORTED_MODULE_35__pages_show_rocking_show_rocking_module__["a" /* ShowRockingPageModule */],
                __WEBPACK_IMPORTED_MODULE_40__pages_info_install_info_install_module__["a" /* InfoInstallPageModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__providers_posts_posts__["a" /* PostsProvider */],
                __WEBPACK_IMPORTED_MODULE_6__providers_backbutton_backbutton__["a" /* BackbuttonProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_linker_linker__["a" /* LinkerProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_ios_status_ios_status__["a" /* IosStatusProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_pages_pages__["a" /* PagesProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_visual_composer_visual_composer__["a" /* VisualComposerProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_lenguaje_lenguaje__["a" /* LenguajeProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_artist_loader_artist_loader__["a" /* ArtistLoaderProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_no_sleep_no_sleep__["a" /* NoSleepProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_horarios_loader_horarios_loader__["a" /* HorariosLoaderProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_media_loader_media_loader__["a" /* MediaLoaderProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_blog_blog__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_inicio_inicio__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_linker_linker__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_ios_status_ios_status__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_venta_entradas_venta_entradas__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_artistas_artistas__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_como_llegar_como_llegar__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_horarios_horarios__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_info_install_info_install__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_utils__ = __webpack_require__(424);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, alertCtrl, loadingCtrl, lnkr, iosStatus, modalCtrl, app) {
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.lnkr = lnkr;
        this.iosStatus = iosStatus;
        this.modalCtrl = modalCtrl;
        this.app = app;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_inicio_inicio__["a" /* InicioPage */];
        this.instalable = false;
        this.prompt = null;
        this.initializeApp();
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_3__pages_inicio_inicio__["a" /* InicioPage */], icon: "", active: false, params: {}, classCss: "fa-home" },
            { title: 'Blog', component: __WEBPACK_IMPORTED_MODULE_2__pages_blog_blog__["a" /* BlogPage */], icon: "list-box", active: false, params: {}, classCss: "" },
            { title: 'Entradas', component: __WEBPACK_IMPORTED_MODULE_6__pages_venta_entradas_venta_entradas__["a" /* VentaEntradasPage */], icon: "", active: false, params: {}, classCss: "fa-ticket" },
            { title: 'Artistas', component: __WEBPACK_IMPORTED_MODULE_7__pages_artistas_artistas__["a" /* ArtistasPage */], icon: "", active: false, params: {}, classCss: "fa-star" },
            { title: 'Cómo llegar', component: __WEBPACK_IMPORTED_MODULE_8__pages_como_llegar_como_llegar__["a" /* ComoLlegarPage */], icon: "", active: false, params: {}, classCss: "fa-map" },
            //{ title: 'Show Rocking', component: ShowRockingPage, icon: "", active: false, params: {}, classCss: "fa-cutlery" },
            { title: 'Horarios', component: __WEBPACK_IMPORTED_MODULE_9__pages_horarios_horarios__["a" /* HorariosPage */], icon: "clock", active: false, params: {}, classCss: "" },
        ];
    }
    MyApp.prototype.installApp = function () {
        var _this = this;
        if (this.prompt) {
            this.prompt.prompt();
            this.prompt.userChoice.then(function (choiceResult) {
                if (choiceResult.outcome === 'accepted') {
                    _this.instalable = false;
                    _this.prompt = null;
                }
                else { }
            });
        }
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.app.viewDidLoad.subscribe(function (view) {
            var parms = (view.data.id == 0) ? '0' : view.data.id || view.data.src || '';
            var baseUrl = Object(__WEBPACK_IMPORTED_MODULE_11__utils_utils__["a" /* getUrlByComponentPage */])(view.component);
            if (baseUrl) {
                if (parms) {
                    console.log(baseUrl + '/' + parms);
                }
                else {
                    console.log(baseUrl);
                }
            }
        });
        this.platform.ready().then(function () {
            _this.iosStatus.init();
            _this.lnkr.init();
            _this.nav.viewDidEnter.subscribe(function (view) {
                for (var _i = 0, _a = _this.pages; _i < _a.length; _i++) {
                    var p = _a[_i];
                    p.active = (p.component == view.component);
                }
            });
            if (_this.platform.is('ios')) {
                navigator.serviceWorker.getRegistrations().then(function (registrations) {
                    console.log(registrations);
                });
                _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__pages_info_install_info_install__["a" /* InfoInstallPage */], null, { cssClass: 'inset-modal' }).present();
            }
            else if (_this.platform.is('android')) {
                window.addEventListener('appInstall', function (e) {
                    _this.prompt = e.detail;
                    _this.instalable = !window.matchMedia('(display-mode: standalone)').matches;
                });
            }
            window.addEventListener('appUpdate', function (e) {
                var alert = _this.alertCtrl.create({
                    title: 'Actualización',
                    message: 'La App se reiniciará automáticamente',
                    enableBackdropDismiss: false,
                    buttons: [
                        {
                            text: 'Actualizar',
                            handler: function () {
                                var loading = _this.loadingCtrl.create({
                                    spinner: 'crescent'
                                });
                                loading.present();
                                e.detail.postMessage({ updateSw: true });
                            }
                        }
                    ]
                });
                alert.present();
            }, false);
        });
    };
    MyApp.prototype.openPage = function (page) {
        if (page.component == this.nav.getActive().component) { }
        else {
            this.nav.setRoot(page.component, page.params);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\app\app.html"*/'<!--ion-menu id="myMenu" [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p.component)">\n                <ion-icon [name]="p.icon"></ion-icon>\n                <span class="spanItem"> {{p.title}}</span>\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu-->\n<ion-menu type="push" [content]="content" id="myMenu" class="collapseSideMenu">\n    <ion-content>\n        <img style="margin: 0 auto; display: block;" src="./assets/imgs/logo.png" />\n        <ion-list no-lines>\n            <button menuClose icon-only ion-item detail-none (click)="openPage(p)" *ngFor="let p of pages; let i = index">\n                <div *ngIf="p.active" class="active-menu-item"></div>\n                <ion-icon *ngIf="p.icon" [name]="p.icon"></ion-icon>\n                <ion-icon *ngIf="p.classCss" [className]="p.classCss" style="font-size: 2.2rem;"></ion-icon>\n                <div class="spanItemCollapse"> {{p.title}}</div>\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n<ion-footer id="installBanner" *ngIf="platform.is(\'android\')" [ngStyle]="{ visibility: instalable?\'visible\':\'hidden\' }" class="animated slideInUp">\n    <ion-toolbar>\n        <ion-title>Instalar como App?</ion-title>\n        <ion-buttons right>\n            <button ion-button solid round color="secondary" (click)="installApp()">Instalar</button>\n            <button ion-button solid round color="danger" (click)="instalable = false;">Cancelar</button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_linker_linker__["a" /* LinkerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_ios_status_ios_status__["a" /* IosStatusProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackbuttonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BackbuttonProvider = /** @class */ (function () {
    function BackbuttonProvider() {
        this.isfirstLoad = true;
    }
    BackbuttonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], BackbuttonProvider);
    return BackbuttonProvider;
}());

//# sourceMappingURL=backbutton.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewerTransitionGesture; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_dom__ = __webpack_require__(14);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var HAMMER_THRESHOLD = 10;
var MAX_ATTACK_ANGLE = 45;
var DRAG_THRESHOLD = 70;
var ImageViewerTransitionGesture = /** @class */ (function (_super) {
    __extends(ImageViewerTransitionGesture, _super);
    function ImageViewerTransitionGesture(platform, component, domCtrl, renderer, cb) {
        var _this = _super.call(this, platform, component.getNativeElement(), {
            maxAngle: MAX_ATTACK_ANGLE,
            threshold: HAMMER_THRESHOLD,
            gesture: component._gestureCtrl.createGesture({ name: 'image-viewer' }),
            direction: 'y',
            domController: domCtrl
        }) || this;
        _this.component = component;
        _this.renderer = renderer;
        _this.cb = cb;
        _this.translationY = 0;
        _this.imageContainer = component.getNativeElement().querySelector('.image');
        _this.backdrop = component.getNativeElement().querySelector('ion-backdrop');
        _this.listen();
        return _this;
    }
    // As we handle both pinch and drag, we have to make sure we don't drag when we are trying to pinch
    ImageViewerTransitionGesture.prototype.isPinching = function (ev) {
        return ev.touches && ev.touches.length > 1;
    };
    ImageViewerTransitionGesture.prototype.onDragStart = function (ev) {
        ev.preventDefault();
        if (this.isPinching(ev)) {
            this.abort(ev);
        }
        var coord = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_dom__["f" /* pointerCoord */])(ev);
        this.startY = coord.y;
        return true;
    };
    ImageViewerTransitionGesture.prototype.canStart = function (ev) {
        return !this.component.isZoomed && !this.isPinching(ev);
    };
    ImageViewerTransitionGesture.prototype.onDragMove = function (ev) {
        var _this = this;
        if (this.isPinching(ev)) {
            this.abort(ev);
        }
        var coord = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_dom__["f" /* pointerCoord */])(ev);
        this.translationY = coord.y - this.startY;
        this.opacity = Math.max(1 - Math.abs(this.translationY) / (10 * DRAG_THRESHOLD), .5);
        this.plt.raf(function () {
            _this.renderer.setElementStyle(_this.imageContainer, _this.plt.Css.transform, "translateY(" + _this.translationY + "px)");
            _this.renderer.setElementStyle(_this.backdrop, 'opacity', _this.opacity.toString());
        });
        return true;
    };
    ImageViewerTransitionGesture.prototype.onDragEnd = function (ev) {
        if (Math.abs(this.translationY) > DRAG_THRESHOLD) {
            this.cb();
        }
        else {
            var imageContainerAnimation = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Animation */](this.plt, this.imageContainer);
            var backdropAnimation = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Animation */](this.plt, this.backdrop);
            backdropAnimation.fromTo('opacity', this.opacity, '1');
            imageContainerAnimation.fromTo('translateY', this.translationY + "px", '0px');
            new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Animation */](this.plt)
                .easing('ease-in')
                .duration(150)
                .add(backdropAnimation)
                .add(imageContainerAnimation)
                .play();
        }
        return true;
    };
    return ImageViewerTransitionGesture;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["t" /* PanGesture */]));

//# sourceMappingURL=image-viewer-transition-gesture.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewerZoomGesture; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_hammer__ = __webpack_require__(238);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var MAX_SCALE = 3;
var ImageViewerZoomGesture = /** @class */ (function (_super) {
    __extends(ImageViewerZoomGesture, _super);
    function ImageViewerZoomGesture(component, element, platform, renderer) {
        var _this = _super.call(this, element.nativeElement) || this;
        _this.component = component;
        _this.platform = platform;
        _this.renderer = renderer;
        _this.adjustScale = 1;
        _this.adjustDeltaX = 0;
        _this.adjustDeltaY = 0;
        _this.currentScale = 1;
        _this.currentDeltaX = 0;
        _this.currentDeltaY = 0;
        _this.allowedXMargin = 0;
        _this.allowedYMargin = 0;
        // Force both directions after super to avoid override allowing only one direction
        _this.options({ direction: __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_hammer__["a" /* DIRECTION_HORIZONTAL */] | __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_hammer__["b" /* DIRECTION_VERTICAL */] });
        _this.listen();
        _this.on('pinch', function (e) { return _this.onPinch(e); });
        _this.on('pinchend', function (e) { return _this.onPinchEnd(e); });
        _this.on('panstart', function (e) { return _this.onPanStart(e); });
        _this.on('pan', function (e) { return _this.onPan(e); });
        _this.on('panend', function (e) { return _this.onPanEnd(e); });
        _this.on('doubletap', function (e) { return _this.onDoubleTap(e); });
        return _this;
    }
    ImageViewerZoomGesture.prototype.onPinch = function (event) {
        this.component.dragGesture.abort(event);
        this.currentScale = Math.max(1, Math.min(MAX_SCALE, this.adjustScale * event.scale));
        this.currentDeltaX = this.adjustDeltaX + (event.deltaX / this.currentScale);
        this.currentDeltaY = this.adjustDeltaY + (event.deltaY / this.currentScale);
        this.setImageContainerTransform();
    };
    ImageViewerZoomGesture.prototype.onPinchEnd = function (event) {
        this.component.isZoomed = (this.currentScale !== 1);
        if (!this.component.isZoomed) {
            new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Animation */](this.platform, this.element)
                .fromTo('translateX', this.currentDeltaX + "px", '0')
                .fromTo('translateY', this.currentDeltaY + "px", '0')
                .easing('ease-in')
                .duration(50)
                .play();
            this.currentDeltaX = 0;
            this.currentDeltaY = 0;
        }
        // Saving the final transforms for adjustment next time the user interacts.
        this.adjustScale = this.currentScale;
        this.adjustDeltaX = this.currentDeltaX;
        this.adjustDeltaY = this.currentDeltaY;
    };
    ImageViewerZoomGesture.prototype.onPanStart = function (event) {
        if (!this.component.isZoomed) {
            return;
        }
        var originalImageWidth = this.element.offsetWidth;
        var originalImageHeight = this.element.offsetHeight;
        this.allowedXMargin = ((originalImageWidth * this.currentScale) - originalImageWidth) / 4;
        this.allowedYMargin = ((originalImageHeight * this.currentScale) - originalImageHeight) / 4;
    };
    ImageViewerZoomGesture.prototype.onPan = function (event) {
        if (!this.component.isZoomed) {
            return;
        }
        this.currentDeltaX = this.boundAdjustement(Math.floor(this.adjustDeltaX + event.deltaX / this.currentScale), this.allowedXMargin);
        this.currentDeltaY = this.boundAdjustement(Math.floor(this.adjustDeltaY + event.deltaY / this.currentScale), this.allowedYMargin);
        this.setImageContainerTransform();
    };
    ImageViewerZoomGesture.prototype.boundAdjustement = function (adjustement, bound) {
        if (adjustement > bound || adjustement < -bound) {
            return Math.min(bound, Math.max(adjustement, -bound));
        }
        return adjustement;
    };
    ImageViewerZoomGesture.prototype.onPanEnd = function (event) {
        if (!this.component.isZoomed) {
            return;
        }
        this.adjustDeltaX = this.currentDeltaX;
        this.adjustDeltaY = this.currentDeltaY;
    };
    ImageViewerZoomGesture.prototype.onDoubleTap = function (event) {
        this.component.isZoomed = !this.component.isZoomed;
        if (this.component.isZoomed) {
            this.currentScale = 2;
        }
        else {
            this.currentScale = 1;
            this.adjustDeltaX = this.currentDeltaX = 0;
            this.adjustDeltaY = this.currentDeltaY = 0;
        }
        this.adjustScale = this.currentScale;
        this.setImageContainerTransform();
    };
    ImageViewerZoomGesture.prototype.setImageContainerTransform = function () {
        var transforms = [];
        transforms.push("scale(" + this.currentScale + ")");
        transforms.push("translate(" + this.currentDeltaX + "px, " + this.currentDeltaY + "px)");
        this.renderer.setElementStyle(this.element, this.platform.Css.transform, transforms.join(' '));
    };
    return ImageViewerZoomGesture;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* Gesture */]));

//# sourceMappingURL=image-viewer-zoom-gesture.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUrlByComponentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_artista_artista__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_artistas_artistas__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_blog_blog__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_como_llegar_como_llegar__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_entrada_entrada__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_horarios_horarios__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_horario_dia_horario_dia__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pagina_pagina__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_show_rocking_show_rocking__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_venta_entradas_venta_entradas__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_inicio_inicio__ = __webpack_require__(75);











var getUrlByComponentPage = function (comp) {
    if (comp == __WEBPACK_IMPORTED_MODULE_10__pages_inicio_inicio__["a" /* InicioPage */])
        return '/inicio';
    if (comp == __WEBPACK_IMPORTED_MODULE_0__pages_artista_artista__["a" /* ArtistaPage */])
        return '/artista';
    if (comp == __WEBPACK_IMPORTED_MODULE_1__pages_artistas_artistas__["a" /* ArtistasPage */])
        return '/artistas';
    if (comp == __WEBPACK_IMPORTED_MODULE_2__pages_blog_blog__["a" /* BlogPage */])
        return '/blog';
    if (comp == __WEBPACK_IMPORTED_MODULE_3__pages_como_llegar_como_llegar__["a" /* ComoLlegarPage */])
        return '/como-llegar';
    if (comp == __WEBPACK_IMPORTED_MODULE_4__pages_entrada_entrada__["a" /* EntradaPage */])
        return '/blog';
    if (comp == __WEBPACK_IMPORTED_MODULE_5__pages_horarios_horarios__["a" /* HorariosPage */])
        return '/horarios';
    if (comp == __WEBPACK_IMPORTED_MODULE_6__pages_horario_dia_horario_dia__["a" /* HorarioDiaPage */])
        return '/horario';
    if (comp == __WEBPACK_IMPORTED_MODULE_7__pages_pagina_pagina__["a" /* PaginaPage */])
        return '/page';
    if (comp == __WEBPACK_IMPORTED_MODULE_8__pages_show_rocking_show_rocking__["a" /* ShowRockingPage */])
        return '/show-rocking';
    if (comp == __WEBPACK_IMPORTED_MODULE_9__pages_venta_entradas_venta_entradas__["a" /* VentaEntradasPage */])
        return '/venta-entradas';
    return null;
};
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BlogPageModule = /** @class */ (function () {
    function BlogPageModule() {
    }
    BlogPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__blog__["a" /* BlogPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__blog__["a" /* BlogPage */]),
            ],
        })
    ], BlogPageModule);
    return BlogPageModule;
}());

//# sourceMappingURL=blog.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntradaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entrada__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EntradaPageModule = /** @class */ (function () {
    function EntradaPageModule() {
    }
    EntradaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__entrada__["a" /* EntradaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__entrada__["a" /* EntradaPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], EntradaPageModule);
    return EntradaPageModule;
}());

//# sourceMappingURL=entrada.module.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlSanitizerPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HtmlSanitizerPipe = /** @class */ (function () {
    function HtmlSanitizerPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    HtmlSanitizerPipe.prototype.transform = function (value) {
        return this._sanitizer.bypassSecurityTrustHtml(value);
    };
    HtmlSanitizerPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'sanitizeHtml'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HtmlSanitizerPipe);
    return HtmlSanitizerPipe;
}());

//# sourceMappingURL=html-sanitizer.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_linker_linker__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageViewerDirective = /** @class */ (function () {
    function ImageViewerDirective(_el, lnk) {
        this._el = _el;
        this.lnk = lnk;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ImageViewerDirective.prototype.onClick = function (event) {
        event.stopPropagation();
        var element = this._el.nativeElement;
        var imagesrc = this.src || element.src;
        if (imagesrc)
            this.lnk.openImage(imagesrc);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('imageViewer'),
        __metadata("design:type", String)
    ], ImageViewerDirective.prototype, "src", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ImageViewerDirective.prototype, "close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ImageViewerDirective.prototype, "onClick", null);
    ImageViewerDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[imageViewer]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__providers_linker_linker__["a" /* LinkerProvider */]])
    ], ImageViewerDirective);
    return ImageViewerDirective;
}());

//# sourceMappingURL=image-viewer.directive.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InicioPageModule = /** @class */ (function () {
    function InicioPageModule() {
    }
    InicioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__inicio__["a" /* InicioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__inicio__["a" /* InicioPage */]),
            ],
        })
    ], InicioPageModule);
    return InicioPageModule;
}());

//# sourceMappingURL=inicio.module.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found__ = __webpack_require__(431);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotFoundPageModule = /** @class */ (function () {
    function NotFoundPageModule() {
    }
    NotFoundPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__not_found__["a" /* NotFoundPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__not_found__["a" /* NotFoundPage */]),
            ],
        })
    ], NotFoundPageModule);
    return NotFoundPageModule;
}());

//# sourceMappingURL=not-found.module.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_backbutton_backbutton__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NotFoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotFoundPage = /** @class */ (function () {
    function NotFoundPage(navCtrl, navParams, bckBtn) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bckBtn = bckBtn;
        if (this.bckBtn.isfirstLoad) {
            this.bckBtn.isfirstLoad = false;
            var actLoc = window.location.href;
            window.history.replaceState(null, null, '#/inicio');
            window.history.pushState(null, null, actLoc);
        }
    }
    NotFoundPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-not-found',template:/*ion-inline-start:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\not-found\not-found.html"*/'<ion-header>\n\n    <ion-navbar color="dark">\n        <ion-title>Información no encontrada</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n</ion-content>'/*ion-inline-end:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\not-found\not-found.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_backbutton_backbutton__["a" /* BackbuttonProvider */]])
    ], NotFoundPage);
    return NotFoundPage;
}());

//# sourceMappingURL=not-found.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagina__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PaginaPageModule = /** @class */ (function () {
    function PaginaPageModule() {
    }
    PaginaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pagina__["a" /* PaginaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pagina__["a" /* PaginaPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], PaginaPageModule);
    return PaginaPageModule;
}());

//# sourceMappingURL=pagina.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VentaEntradasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__venta_entradas__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VentaEntradasPageModule = /** @class */ (function () {
    function VentaEntradasPageModule() {
    }
    VentaEntradasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__venta_entradas__["a" /* VentaEntradasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__venta_entradas__["a" /* VentaEntradasPage */]),
            ],
        })
    ], VentaEntradasPageModule);
    return VentaEntradasPageModule;
}());

//# sourceMappingURL=venta-entradas.module.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LenguajeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LenguajeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LenguajeProvider = /** @class */ (function () {
    function LenguajeProvider(http) {
        this.http = http;
        console.log('Hello LenguajeProvider Provider');
    }
    LenguajeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LenguajeProvider);
    return LenguajeProvider;
}());

//# sourceMappingURL=lenguaje.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artistas__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ArtistasPageModule = /** @class */ (function () {
    function ArtistasPageModule() {
    }
    ArtistasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__artistas__["a" /* ArtistasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__artistas__["a" /* ArtistasPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */]
            ]
        })
    ], ArtistasPageModule);
    return ArtistasPageModule;
}());

//# sourceMappingURL=artistas.module.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artista__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ArtistaPageModule = /** @class */ (function () {
    function ArtistaPageModule() {
    }
    ArtistaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__artista__["a" /* ArtistaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__artista__["a" /* ArtistaPage */]),
            ],
        })
    ], ArtistaPageModule);
    return ArtistaPageModule;
}());

//# sourceMappingURL=artista.module.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComoLlegarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__como_llegar__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComoLlegarPageModule = /** @class */ (function () {
    function ComoLlegarPageModule() {
    }
    ComoLlegarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__como_llegar__["a" /* ComoLlegarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__como_llegar__["a" /* ComoLlegarPage */]),
            ],
        })
    ], ComoLlegarPageModule);
    return ComoLlegarPageModule;
}());

//# sourceMappingURL=como-llegar.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_viewer__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImageViewerPageModule = /** @class */ (function () {
    function ImageViewerPageModule() {
    }
    ImageViewerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__image_viewer__["a" /* ImageViewerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__image_viewer__["a" /* ImageViewerPage */]),
            ],
        })
    ], ImageViewerPageModule);
    return ImageViewerPageModule;
}());

//# sourceMappingURL=image-viewer.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorarioDiaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__horario_dia__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(440);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HorarioDiaPageModule = /** @class */ (function () {
    function HorarioDiaPageModule() {
    }
    HorarioDiaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__horario_dia__["a" /* HorarioDiaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__horario_dia__["a" /* HorarioDiaPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], HorarioDiaPageModule);
    return HorarioDiaPageModule;
}());

//# sourceMappingURL=horario-dia.module.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__horario_timeline_horario_timeline__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shrinking_segment_header_shrinking_segment_header__ = __webpack_require__(442);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__horario_timeline_horario_timeline__["a" /* HorarioTimelineComponent */], __WEBPACK_IMPORTED_MODULE_3__shrinking_segment_header_shrinking_segment_header__["a" /* ShrinkingSegmentHeader */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__horario_timeline_horario_timeline__["a" /* HorarioTimelineComponent */], __WEBPACK_IMPORTED_MODULE_3__shrinking_segment_header_shrinking_segment_header__["a" /* ShrinkingSegmentHeader */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorarioTimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HorarioTimelineComponent = /** @class */ (function () {
    function HorarioTimelineComponent(appCtrl) {
        this.appCtrl = appCtrl;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('es1Name'),
        __metadata("design:type", String)
    ], HorarioTimelineComponent.prototype, "es1Name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('es2Name'),
        __metadata("design:type", String)
    ], HorarioTimelineComponent.prototype, "es2Name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('color1'),
        __metadata("design:type", String)
    ], HorarioTimelineComponent.prototype, "color1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('color2'),
        __metadata("design:type", String)
    ], HorarioTimelineComponent.prototype, "color2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('events'),
        __metadata("design:type", Array)
    ], HorarioTimelineComponent.prototype, "events", void 0);
    HorarioTimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'horario-timeline',template:/*ion-inline-start:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\components\horario-timeline\horario-timeline.html"*/'<ion-grid>\n  <ion-row>\n    <ion-col [style.backgroundColor]="color2" class="tHeader thESc1" col-6><h4 class="oswaldFont">{{es1Name}}</h4></ion-col>\n    <ion-col [style.backgroundColor]="color1" class="tHeader thESc2" col-6><h4 class="oswaldFont">{{es2Name}}</h4></ion-col>\n  </ion-row>\n</ion-grid>\n<ion-grid class="gTml" [ngStyle]="{\'background\': \'linear-gradient(to left, \' + color1 + \', \' + color2 + \')\' }">\n\n  <div *ngFor="let slot of events">\n    <ion-row *ngIf="slot.escenario == 1">\n      <ion-col col-6></ion-col>\n      <ion-col (click)="appCtrl.getRootNavs()[0].push(\'artista\', { id: slot.id })" [ngStyle]="{\'background-color\':color1, \'border-color\': color1}" [attr.data-time]="slot.hora" class="bLeft" col-6>\n        <ion-row class="innerRow">\n          <ion-col col-8 class="textSlot"><p>{{slot.artista}}</p></ion-col>\n          <ion-col col-4 class="imgCol"><img class="imgSlot" [src]="slot.menuimage"/></ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="slot.escenario == 2">\n      <ion-col (click)="appCtrl.getRootNavs()[0].push(\'artista\', { id: slot.id })" [ngStyle]="{\'background-color\':color2, \'border-color\': color2}" [attr.data-time]="slot.hora" class="bRight" col-6>\n        <ion-row class="innerRow">\n          <ion-col col-4 class="imgCol"><img class="imgSlot" [src]="slot.menuimage"/></ion-col>\n          <ion-col col-8 class="textSlot"><p>{{slot.artista}}</p></ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col col-6></ion-col>\n    </ion-row>\n  </div>\n\n</ion-grid>\n'/*ion-inline-end:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\components\horario-timeline\horario-timeline.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], HorarioTimelineComponent);
    return HorarioTimelineComponent;
}());

//# sourceMappingURL=horario-timeline.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShrinkingSegmentHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShrinkingSegmentHeader = /** @class */ (function () {
    function ShrinkingSegmentHeader(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ShrinkingSegmentHeader.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
        this.scrollArea.ionScroll.subscribe(function (ev) {
            _this.resizeHeader(ev);
        });
    };
    ShrinkingSegmentHeader.prototype.resizeHeader = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.newHeaderHeight = _this.headerHeight - ev.scrollTop;
            if (_this.newHeaderHeight < 0) {
                _this.newHeaderHeight = 0;
            }
            _this.renderer.setElementStyle(_this.element.nativeElement, 'height', _this.newHeaderHeight + 'px');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('scrollArea'),
        __metadata("design:type", Object)
    ], ShrinkingSegmentHeader.prototype, "scrollArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('headerHeight'),
        __metadata("design:type", Number)
    ], ShrinkingSegmentHeader.prototype, "headerHeight", void 0);
    ShrinkingSegmentHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'shrinking-segment-header',template:/*ion-inline-start:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\components\shrinking-segment-header\shrinking-segment-header.html"*/'<ng-content></ng-content>\n'/*ion-inline-end:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\components\shrinking-segment-header\shrinking-segment-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */]])
    ], ShrinkingSegmentHeader);
    return ShrinkingSegmentHeader;
}());

//# sourceMappingURL=shrinking-segment-header.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowRockingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_rocking__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShowRockingPageModule = /** @class */ (function () {
    function ShowRockingPageModule() {
    }
    ShowRockingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__show_rocking__["a" /* ShowRockingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__show_rocking__["a" /* ShowRockingPage */]),
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ShowRockingPageModule);
    return ShowRockingPageModule;
}());

//# sourceMappingURL=show-rocking.module.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaLoaderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MediaLoaderProvider = /** @class */ (function () {
    function MediaLoaderProvider(http) {
        this.http = http;
        this.cacheMedias = [];
    }
    MediaLoaderProvider.prototype.getMediaById = function (id) {
        var _this = this;
        if (this.cacheMedias[id])
            return Promise.resolve(this.cacheMedias[id]);
        else
            return this.http.get('https://portamerica.es/wp-json/wp/v2/media/' + id).toPromise().then(function (data) {
                _this.cacheMedias[id] = data.guid.rendered;
                return data.guid.rendered;
            });
    };
    MediaLoaderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MediaLoaderProvider);
    return MediaLoaderProvider;
}());

//# sourceMappingURL=media-loader.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorariosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__horarios__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_super_tabs__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HorariosPageModule = /** @class */ (function () {
    function HorariosPageModule() {
    }
    HorariosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__horarios__["a" /* HorariosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__horarios__["a" /* HorariosPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_super_tabs__["b" /* SuperTabsModule */].forRoot()
            ],
        })
    ], HorariosPageModule);
    return HorariosPageModule;
}());

//# sourceMappingURL=horarios.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoInstallPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_install__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfoInstallPageModule = /** @class */ (function () {
    function InfoInstallPageModule() {
    }
    InfoInstallPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__info_install__["a" /* InfoInstallPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__info_install__["a" /* InfoInstallPage */]),
            ],
        })
    ], InfoInstallPageModule);
    return InfoInstallPageModule;
}());

//# sourceMappingURL=info-install.module.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntradaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_posts_posts__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_backbutton_backbutton__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_visual_composer_visual_composer__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EntradaPage = /** @class */ (function () {
    function EntradaPage(navCtrl, pltfrm, navParams, postProv, toastCtrl, bckBtn, vC, ref) {
        this.navCtrl = navCtrl;
        this.pltfrm = pltfrm;
        this.navParams = navParams;
        this.postProv = postProv;
        this.toastCtrl = toastCtrl;
        this.bckBtn = bckBtn;
        this.vC = vC;
        this.ref = ref;
        this.post = {
            title: 'Cargando...',
            content: '<h2 style="text-align: center;">Cargando...</h2>',
            isLoading: true,
            image: null,
            imgFull: null,
            scripts: []
        };
        this.showToolbar = false;
    }
    EntradaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.bckBtn.isfirstLoad) {
            console.log('firstload-entrada');
            this.bckBtn.isfirstLoad = false;
            var actLoc = window.location.href;
            window.history.replaceState(null, null, '#/blog');
            window.history.pushState(null, null, actLoc);
        }
        var id = this.navParams.get('id');
        var data = this.navParams.get('data');
        if (data) {
            this.post.title = data.title.rendered;
            try {
                this.post.image = data['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']['portfolio-thumb'].source_url;
                this.post.imgFull = data['_embedded']['wp:featuredmedia'][0].source_url;
            }
            catch (exc) { }
            this.post.isLoading = false;
            var render = this.vC.render(data.content.rendered);
            this.post.content = render.html;
            this.post.scripts = render.scripts;
            this.loadScripts();
        }
        else {
            this.postProv.getPost(id).then(function (data) {
                _this.post.title = data.title.rendered;
                try {
                    _this.post.image = data['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']['portfolio-thumb'].source_url;
                    _this.post.imgFull = data['_embedded']['wp:featuredmedia'][0].source_url;
                }
                catch (exc) { }
                _this.post.isLoading = false;
                var render = _this.vC.render(data.content.rendered);
                _this.post.content = render.html;
                _this.post.scripts = render.scripts;
                _this.loadScripts();
            }).catch(function (err) {
                _this.toastCtrl.create({
                    message: "No se pudo obtener la información",
                    duration: 3000
                }).present();
                _this.navCtrl.pop();
                console.log(err);
            });
        }
        /*this.menuCtrl.enable(false, 'myMenu');
        this.navCtrl.swipeBackEnabled = true;*/
    };
    EntradaPage.prototype.onScroll = function ($event) {
        var scrollTop = $event.scrollTop;
        this.showToolbar = scrollTop >= 120;
        this.ref.detectChanges();
    };
    EntradaPage.prototype.loadScripts = function () {
        var _this = this;
        this.post.scripts.forEach(function (script) {
            var eleScript = document.createElement('script');
            eleScript.src = script;
            _this.scriptcontainer.nativeElement.appendChild(eleScript);
        });
    };
    EntradaPage.prototype.ionViewWillUnload = function () {
        /*this.menuCtrl.enable(true, 'myMenu');
        this.navCtrl.swipeBackEnabled = false;*/
    };
    /*getWidth():number {
      return window.screen.availWidth;
    }*/
    EntradaPage.prototype.gback = function () {
        //console.log(this.navCtrl.canGoBack());
        if (this.navCtrl.canGoBack()) {
            this.navCtrl.pop();
        }
        else {
            window.history.back();
        }
    };
    EntradaPage.prototype.openModal = function () {
        //if(this.post.imgFull) this.imageViewerCtrl.create(this.post.imgFull).present();
        //this.navCtrl.push(ImageViwerPage, { src: this.post.imgFull });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('scriptscontainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], EntradaPage.prototype, "scriptcontainer", void 0);
    EntradaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-entrada',template:/*ion-inline-start:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\entrada\entrada.html"*/'<ion-header [class.opaque]="showToolbar || (post.image == null)" no-border>\n    <ion-navbar color="dark" transparent>\n        <ion-buttons left>\n            <button *ngIf="!navCtrl.canGoBack()" ion-button icon-only (click)="gback()" [ngClass]="{\'customBackButton\': pltfrm.is(\'android\') || pltfrm.is(\'windows\') }">\n              <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title [hidden]="!showToolbar && (post.image != null)">{{post.title}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content #myContent (ionScroll)="onScroll($event)">\n    <ion-spinner *ngIf="post.isLoading" name="bubbles"></ion-spinner>\n    <img class="headerImg" *ngIf="post.image" [imageViewer]="post.imgFull" [src]="post.image" />\n    <div #scriptscontainer style="display: none;"></div>\n    <div class="bootstrap-wrapper" style="padding: 15px;" [innerHTML]="post.content | sanitizeHtml"></div>\n</ion-content>'/*ion-inline-end:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\entrada\entrada.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_posts_posts__["a" /* PostsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_backbutton_backbutton__["a" /* BackbuttonProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_visual_composer_visual_composer__["a" /* VisualComposerProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], EntradaPage);
    return EntradaPage;
}());

//# sourceMappingURL=entrada.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__horario_dia_horario_dia__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_horarios_loader_horarios_loader__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic2_super_tabs__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HorariosPage = /** @class */ (function () {
    function HorariosPage(horasProv, navParams, superTabsCtrl) {
        var _this = this;
        this.horasProv = horasProv;
        this.navParams = navParams;
        this.superTabsCtrl = superTabsCtrl;
        this.page = __WEBPACK_IMPORTED_MODULE_2__horario_dia_horario_dia__["a" /* HorarioDiaPage */];
        this.title = "Horarios";
        this.startIndex = 0;
        this.horasProv.loadArtist().then(function () {
            if (_this.horasProv.horarioInfo) {
                _this.title = "Horarios: " + _this.horasProv.horarioInfo.dias[0].text;
                var dia_1 = _this.navParams.get('dia');
                if (dia_1) {
                    setTimeout(function () {
                        _this.superTabsCtrl.slideTo(dia_1);
                    }, 500);
                }
            }
        });
    }
    HorariosPage.prototype.onTabSelect = function (ev) {
        if (this.horasProv.horarioInfo)
            this.title = "Horarios: " + this.horasProv.horarioInfo.dias[ev.index].text;
    };
    HorariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-horarios',template:/*ion-inline-start:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\horarios\horarios.html"*/'<ion-header>\n  <ion-navbar color="dark">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-spinner *ngIf="!horasProv.horarioInfo && !horasProv.errLoading" name="bubbles"></ion-spinner>\n    <super-tabs id="horarioTabs" *ngIf="horasProv.horarioInfo" (tabSelect)="onTabSelect($event)" indicatorColor="custom" toolbarBackground="dark" toolbarColor="light" tabsPlacement="bottom" [config]="{sideMenu: \'left\'}">\n      <super-tab *ngFor="let dia of horasProv.horarioInfo.dias; let i = index" [root]="page" icon="calendar" [rootParams]="{\'id\': i}" [title]="dia.text"></super-tab>\n    </super-tabs>\n    <button *ngIf="!horasProv.horarioInfo && horasProv.errLoading" ion-button icon-start block strong solid color="danger" disabled><ion-icon style="zoom:2.0;" name="information"></ion-icon> Horarios no disponibles...</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\horarios\horarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_horarios_loader_horarios_loader__["a" /* HorariosLoaderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic2_super_tabs__["a" /* SuperTabsController */]])
    ], HorariosPage);
    return HorariosPage;
}());

//# sourceMappingURL=horarios.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entrada_entrada__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_posts_posts__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_backbutton_backbutton__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_visual_composer_visual_composer__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var BlogPage = /** @class */ (function () {
    function BlogPage(navCtrl, navParams, postProv, bkBtn, vC) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postProv = postProv;
        this.bkBtn = bkBtn;
        this.vC = vC;
        this.posts = [];
        this.isLoading = true;
        this.offset = 0;
        this.errorLoading = false;
        this.bkBtn.isfirstLoad = false;
        this.getPosts();
    }
    BlogPage.prototype.loadData = function (event) {
        var _this = this;
        event.waitFor(this.postProv.getPosts(this.offset).then(function (data) {
            if (data.length === 0) {
                event.target.disabled = true;
                return;
            }
            _this.offset += data.length;
            (_a = _this.posts).push.apply(_a, data);
            _this.errorLoading = false;
            var _a;
        }).catch(function () {
            _this.errorLoading = true;
        }));
    };
    BlogPage.prototype.doRefresh = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.offset = 0;
                        return [4 /*yield*/, this.getPosts()];
                    case 1:
                        _a.sent();
                        event.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    BlogPage.prototype.getPosts = function () {
        var _this = this;
        return this.postProv.getPosts(this.offset).then(function (data) {
            _this.posts = [];
            _this.isLoading = false;
            _this.offset += data.length;
            (_a = _this.posts).push.apply(_a, data);
            var _a;
        }).catch(function () {
            _this.isLoading = false;
            _this.errorLoading = true;
            console.log('err post');
        });
    };
    BlogPage.prototype.loadPost = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__entrada_entrada__["a" /* EntradaPage */], { id: id });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* InfiniteScroll */])
    ], BlogPage.prototype, "infiniteScroll", void 0);
    BlogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-blog',template:/*ion-inline-start:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\blog\blog.html"*/'<ion-header>\n    <ion-navbar color="dark">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Blog</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher *ngIf="!isLoading" slot="fixed" (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" pullMax="120" refreshingText="Recargando...">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-spinner *ngIf="isLoading" name="bubbles"></ion-spinner>\n    <ion-list *ngIf="!isLoading">\n\n\n        <!--ion-card *ngFor="let item of posts" (click)="loadPost(item.id)">\n            <img *ngIf="item._embedded[\'wp:featuredmedia\'] && item._embedded[\'wp:featuredmedia\'][0]" [src]=\'item._embedded["wp:featuredmedia"][0].source_url\' />\n\n            \n            /*animation: slide-up 1.5s ease!important;*/\n            /*@keyframes slide-up {\n                0% {\n                    opacity: 0;\n                    transform: translateY(20px);\n                }\n                100% {\n                    opacity: 1;\n                    transform: translateY(0);\n                }\n            }*/\n\n            <ion-card-content>\n                <ion-card-title>{{item.title.rendered}}</ion-card-title>\n\n                <p [innerHTML]="postProv.renderVisualComposer(item.excerpt.rendered)"></p>\n            </ion-card-content>\n        </ion-card-->\n\n        <ion-card *ngFor="let item of posts" (click)="loadPost(item.id)" class="animated fadeIn">\n            <img *ngIf="item._embedded[\'wp:featuredmedia\'] && item._embedded[\'wp:featuredmedia\'][0] && item._embedded[\'wp:featuredmedia\'][0].source_url" [src]=\'item._embedded["wp:featuredmedia"][0].source_url\' />\n            <div class="pbox">\n                <ion-card-title class="oswaldFont">{{item.title.rendered}}</ion-card-title>\n                <p>{{item.date_gmt | date: \'dd/MM/yyyy\'}}</p>\n            </div>\n            <hr/>\n\n            <ion-card-content>\n                <p [innerHTML]="vC.renderText(item.excerpt.rendered)"></p>\n            </ion-card-content>\n\n        </ion-card>\n    </ion-list>\n    <button *ngIf="errorLoading" ion-button icon-start block strong solid color="danger" disabled><ion-icon style="zoom:2.0;" name="information"></ion-icon> Error al cargar datos...</button>\n    <ion-infinite-scroll *ngIf="!isLoading" threshold="100px" (ionInfinite)="loadData($event)">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Cargando más entadas...">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\blog\blog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_posts_posts__["a" /* PostsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_backbutton_backbutton__["a" /* BackbuttonProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_visual_composer_visual_composer__["a" /* VisualComposerProvider */]])
    ], BlogPage);
    return BlogPage;
}());

//# sourceMappingURL=blog.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsProvider = /** @class */ (function () {
    function PostsProvider(http) {
        this.http = http;
        this.cachePostsByID = [];
        this.cachePostsBySlug = [];
        this.tOut = 7500;
    }
    PostsProvider.prototype.getPosts = function (offset) {
        return this.http.get('https://portamerica.es/wp-json/wp/v2/posts?_embed&per_page=10&offset=' + offset).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["timeout"])(this.tOut)).toPromise();
    };
    PostsProvider.prototype.getPost = function (id) {
        var _this = this;
        if (this.cachePostsByID[id])
            return new Promise(function (resolve, reject) {
                resolve(_this.cachePostsByID[id]);
            });
        else
            return this.http.get('https://portamerica.es/wp-json/wp/v2/posts/' + id + '?_embed').pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["timeout"])(this.tOut)).toPromise().then(function (data) {
                _this.cachePostsByID[id] = data;
                _this.cachePostsBySlug[data.slug] = data;
                return data;
            });
    };
    PostsProvider.prototype.getPostBySlug = function (slug) {
        var _this = this;
        var parseslug = slug.replace(/^\//, '').replace(/\/$/, '');
        if (this.cachePostsBySlug[parseslug]) {
            return new Promise(function (resolve, reject) {
                resolve([_this.cachePostsBySlug[parseslug]]);
            });
        }
        else
            return this.http.get('https://portamerica.es/wp-json/wp/v2/posts?_embed&slug=' + encodeURI(slug)).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["timeout"])(this.tOut)).toPromise().then(function (data) {
                if (data[0]) {
                    _this.cachePostsByID[data[0].id] = data[0];
                    _this.cachePostsBySlug[data[0].slug] = data[0];
                }
                return data;
            });
    };
    PostsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PostsProvider);
    return PostsProvider;
}());

//# sourceMappingURL=posts.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualComposerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CSSAttrs = [
    'font-size', 'font-family', 'line-height', 'text-align', 'margin-left', 'margin-top'
];
var VisualComposerProvider = /** @class */ (function () {
    function VisualComposerProvider(pltfrm) {
        this.pltfrm = pltfrm;
    }
    VisualComposerProvider.prototype.getPlatformMode = function () {
        if (this.pltfrm.is('android')) {
            return "md";
        }
        else if (this.pltfrm.is('ios')) {
            return "ios";
        }
        else {
            return "md";
        }
    };
    VisualComposerProvider.prototype.renderText = function (content) {
        content = content.replace(/&nbsp;/mgi, ' ');
        content = content.replace(/&#8221;/mgi, '"');
        content = content.replace(/&#8243;/mgi, '"');
        content = content.replace(/\[/mgi, '<');
        content = content.replace(/\]/mgi, '>');
        content = content.replace(/<vc_row[^<>]*>/mgi, '<ion-row>');
        content = content.replace(/<\/vc_row[^<>]*>/mgi, '</ion-row>');
        content = content.replace(/<vc_column[^<>]*>/mgi, '<ion-col>');
        content = content.replace(/<\/vc_column[^<>]*>/mgi, '</ion-col>');
        content = content.replace(/<vc_column_text[^<>]*>/mgi, '<p>');
        content = content.replace(/<\/vc_column_text[^<>]*>/mgi, '</p>');
        content = content.replace(/<vc_custom_heading[^<>]*>/mgi, '<h4>');
        content = content.replace(/<\/vc_custom_heading[^<>]*>/mgi, '</h4>');
        content = content.replace(/<vc_raw_html[^<>]*>/mgi, '<div class="htmlcustom">');
        content = content.replace(/<\/vc_raw_html[^<>]*>/mgi, '</div>');
        content = "<div>" + content + "</div>";
        var doc2 = pjXML.parse(content);
        return doc2.text();
    };
    VisualComposerProvider.prototype.render = function (content) {
        content = content.replace(/&nbsp;/mgi, ' ');
        content = content.replace(/&#8221;/mgi, '"');
        content = content.replace(/&#8243;/mgi, '"');
        content = content.replace(/\[/mgi, '<');
        content = content.replace(/\]/mgi, '>');
        content = '<div class="container-fluid">' + content + '</div>';
        var doc = pjXML.parse(content);
        this.parse_row(doc);
        this.parse_column(doc);
        this.parse_column_text(doc);
        this.parse_custom_headings(doc);
        this.parse_nectar_btn(doc);
        this.parse_nectar_video_lightbox_tag(doc);
        this.parse_nectar_gallery(doc);
        var scripts = this.parse_raw_html(doc);
        this.remove_badfromed_tag(doc);
        return { html: doc.xml(), scripts: scripts };
    };
    VisualComposerProvider.prototype.parse_nectar_gallery = function (doc) {
        var nsldrs = doc.select('//vc_gallery');
        if (!nsldrs)
            return;
        if (!(nsldrs instanceof Array)) {
            nsldrs = [nsldrs];
        }
        nsldrs.forEach(function (nsldr) {
            nsldr.name = "div";
            nsldr.content = [];
            var gallery = new pjXML.Node(1);
            gallery.name = "wp-gallery";
            gallery.attributes = {};
            gallery.attributes.apisrc = "https://portamerica.es";
            gallery.attributes.images = nsldr.attributes.images;
            nsldr.content.push(gallery);
        });
    };
    VisualComposerProvider.prototype.parse_nectar_video_lightbox_tag = function (doc) {
        var nvls = doc.select('//nectar_video_lightbox');
        if (!nvls)
            return;
        if (!(nvls instanceof Array)) {
            nvls = [nvls];
        }
        nvls.forEach(function (nvl) {
            nvl.name = "img";
            nvl.attributes = {
                src: './assets/imgs/youtube.png',
                class: "videoImg",
                href: nvl.attributes.video_url,
                style: 'background-image: url(https://img.youtube.com/vi/' + nvl.attributes.video_url.split('?v=')[1].split('&')[0] + '/0.jpg)'
            };
        });
    };
    VisualComposerProvider.prototype.remove_badfromed_tag = function (node) {
        var _this = this;
        node.content.forEach(function (contentNode, index) {
            if (typeof contentNode == 'string' && contentNode != '') {
                node.content[index] = contentNode.replace(/\/[a-zA-z]+>/mgi, '');
            }
            else if (typeof contentNode == 'object') {
                _this.remove_badfromed_tag(contentNode);
            }
        });
    };
    VisualComposerProvider.prototype.parse_raw_html = function (doc) {
        var _this = this;
        var raws = doc.select('//vc_raw_html');
        var scripts = [];
        if (!raws)
            return scripts;
        if (!(raws instanceof Array)) {
            raws = [raws];
        }
        raws.forEach(function (raw) {
            raw.content = pjXML.parse(decodeURIComponent(atob(raw.content[0]))).content;
            raw.name = "div";
            scripts.push.apply(scripts, _this.getScriptsNode(raw));
        });
        /*console.log(raws);
        console.log(scripts);*/
        return scripts;
    };
    VisualComposerProvider.prototype.getScriptsNode = function (node) {
        var _this = this;
        var scripts = [];
        if (!node || !node.content)
            return scripts;
        node.content.forEach(function (childNode) {
            if (childNode.name == 'script') {
                if (childNode.attributes.src)
                    scripts.push(childNode.attributes.src);
                childNode.name = 'span';
                childNode.attributes = {};
            }
            else {
                var sc = _this.getScriptsNode(childNode);
                if (sc)
                    scripts.push.apply(scripts, sc);
            }
        });
        return scripts;
    };
    VisualComposerProvider.prototype.parse_row = function (doc) {
        var rows = doc.select('//vc_row');
        if (!rows)
            return;
        if (!(rows instanceof Array)) {
            rows = [rows];
        }
        rows.forEach(function (row) {
            //row.name = "ion-row";
            row.name = "div";
            row.attributes = {};
            row.attributes.class = "row";
        });
        //console.log(rows, 'rows');
    };
    VisualComposerProvider.prototype.parse_column = function (doc) {
        var columns = doc.select('//vc_column');
        if (!columns)
            return;
        if (!(columns instanceof Array)) {
            columns = [columns];
        }
        columns.forEach(function (column) {
            //column.name = "ion-col";
            column.name = "div";
            var size = parseFloat(eval(column.attributes.width)) * 12;
            //column.attributes = {};
            column.attributes.class = "col-12 col-md-" + size;
        });
        //console.log(columns, 'colums');
    };
    VisualComposerProvider.prototype.parse_column_text = function (doc) {
        var columnsTexts = doc.select('//vc_column_text');
        if (!columnsTexts)
            return;
        if (!(columnsTexts instanceof Array)) {
            columnsTexts = [columnsTexts];
        }
        columnsTexts.forEach(function (columnText) {
            columnText.name = "div";
            //columnText.attributes.style = columnText.attributes.css.
        });
        //console.log(columnsTexts, 'columnsTexts');
    };
    VisualComposerProvider.prototype.parse_nectar_btn = function (doc) {
        var _this = this;
        var nectarBtns = doc.select('//nectar_btn');
        if (!nectarBtns)
            return;
        if (!(nectarBtns instanceof Array)) {
            nectarBtns = [nectarBtns];
        }
        nectarBtns.forEach(function (nectarBtn) {
            nectarBtn.name = "button";
            var attrs = Object.assign({}, nectarBtn.attributes);
            nectarBtn.attributes = {};
            for (var key in attrs) {
                if (key == 'text') {
                    nectarBtn.content.push(attrs[key]);
                }
                else if (key == 'url') {
                    nectarBtn.attributes.href = attrs[key];
                }
            }
            nectarBtn.attributes.class = "disable-hover button button-" + _this.getPlatformMode() + " button-default button-default-" + _this.getPlatformMode() + " button-block button-block-" + _this.getPlatformMode() + " button-" + _this.getPlatformMode() + "-dark";
            var effect = pjXML.parse('<div class="button-effect"></div>');
            nectarBtn.content.push(effect.content[1]);
        });
        //console.log(nectarBtns, 'nectarBtns');
    };
    VisualComposerProvider.prototype.parse_custom_headings = function (doc) {
        var headings = doc.select('//vc_custom_heading');
        if (!headings) {
            return;
        }
        if (!(headings instanceof Array)) {
            headings = [headings];
        }
        headings.forEach(function (headerElement) {
            var tmpAttr = headerElement.attributes.font_container.split('|');
            var fontAttrs = {
                tag: 'h4'
            };
            tmpAttr.forEach(function (elemento, indice) {
                var params = elemento.split(':');
                fontAttrs[params[0]] = params[1];
                if (params[0] == 'tag') {
                    headerElement.name = params[1];
                }
                else if (CSSAttrs.indexOf(params[0].replace('_', '-')) !== -1) {
                    if (!headerElement.attributes.style) {
                        headerElement.attributes.style = "";
                    }
                    headerElement.attributes.style += params[0].replace('_', '-') + ":" + params[1] + ";";
                }
                //else if() { }
            });
            var html = pjXML.parse(headerElement.attributes.text).content;
            (_a = headerElement.content).unshift.apply(_a, html); //
            delete headerElement.attributes.font_container;
            delete headerElement.attributes.google_fonts;
            delete headerElement.attributes.text;
            var _a;
        });
        //console.log(headings, "custom heading");  
    };
    VisualComposerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */]])
    ], VisualComposerProvider);
    return VisualComposerProvider;
}());

//# sourceMappingURL=visual-composer.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_backbutton_backbutton__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__horarios_horarios__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InicioPage = /** @class */ (function () {
    function InicioPage(navCtrl, bckBtn) {
        this.navCtrl = navCtrl;
        this.bckBtn = bckBtn;
        this.bckBtn.isfirstLoad = false;
    }
    InicioPage.prototype.ionViewDidLoad = function () {
        //this.slds.autoplayDisableOnInteraction = false;
    };
    InicioPage.prototype.openHorario = function (dia) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__horarios_horarios__["a" /* HorariosPage */], { dia: dia });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Slides */])
    ], InicioPage.prototype, "slds", void 0);
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\inicio\inicio.html"*/'<ion-header>\n    <ion-navbar color="dark">\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Inicio</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <!--<div class="sldDiv">\n        <ion-slides direction="vertical" effect="fade" autoplay="3000" loop="true" pager="true">\n            <ion-slide style="background-image: url(\'https://portamerica.es/wp-content/uploads/2018/08/PA_Slides_Abono_Creyentes.jpg\')">\n            </ion-slide>\n            <ion-slide style="background-image: url(\'https://portamerica.es/wp-content/uploads/2018/07/PA_Slides-Asifue2018.jpg\')">\n            </ion-slide>\n            <ion-slide style="background-image: url(\'https://portamerica.es/wp-content/uploads/2018/07/PA_Gracias-2018.jpg\')">\n            </ion-slide>\n        </ion-slides>\n    </div>\n    <div class="pins">\n        <ion-card class="pin">\n            <a href="https://portamerica.es/showrocking-2018/">\n                <img src="https://portamerica.es/wp-content/uploads/2018/06/showrocking-guia-Repsol-2.jpg" />\n                <div class="pinTitle">Show Rocking</div>\n            </a>\n        </ion-card>\n        <ion-card class="pin">\n            <a href="https://portamerica.es/camping/">\n                <img src="https://portamerica.es/wp-content/uploads/2018/07/Acampada_PortAm%C3%A9rica_2018_1.jpg" />\n                <div class="pinTitle">Camping</div>\n            </a>\n        </ion-card>\n    </div>-->\n    <ion-card>\n        <a href="https://portamerica.es/entradas/">\n            <img src="https://portamerica.es/wp-content/uploads/2018/08/PA_Slides_Abono_Creyentes.jpg"/>\n            <div class="card-title oswaldFont">Abonos</div>\n        </a>\n    </ion-card>\n    \n    <ion-card>\n        <a href="https://portamerica.es/artistas/">\n            <img src="https://portamerica.es/wp-content/uploads/2018/07/PA_Slides-Asifue2018.jpg"/>\n            <div class="card-title oswaldFont">Artistas</div>\n        </a>\n    </ion-card>\n    \n    <ion-card>\n        <a href="https://portamerica.es/showrocking-2018/">\n            <img src="https://portamerica.es/wp-content/uploads/2018/06/showrocking-guia-Repsol-2.jpg"/>\n            <div class="card-title oswaldFont">Show Rocking</div>\n        </a>\n    </ion-card>\n\n    <ion-card>\n        <a href="https://portamerica.es/camping/">\n            <img src="https://portamerica.es/wp-content/uploads/2018/07/Acampada_PortAm%C3%A9rica_2018_1.jpg"/>\n            <div class="card-title oswaldFont">Camping</div>\n        </a>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\inicio\inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_backbutton_backbutton__["a" /* BackbuttonProvider */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_backbutton_backbutton__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_visual_composer_visual_composer__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pages_pages__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaginaPage = /** @class */ (function () {
    function PaginaPage(navCtrl, pageProv, pltfrm, navParams, toastCtrl, bckBtn, vC) {
        this.navCtrl = navCtrl;
        this.pageProv = pageProv;
        this.pltfrm = pltfrm;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.bckBtn = bckBtn;
        this.vC = vC;
        this.page = {
            title: 'Cargando...',
            content: '<h2 style="text-align: center;">Cargando...</h2>',
            isLoading: true,
            image: null,
            imgFull: null,
            scripts: []
        };
        this.isfirstLoad = false;
    }
    PaginaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.bckBtn.isfirstLoad) {
            console.log('firstload-pagina');
            this.isfirstLoad = true;
            this.bckBtn.isfirstLoad = false;
            var actLoc = window.location.href;
            window.history.replaceState(null, null, '#/inicio');
            window.history.pushState(null, null, actLoc);
        }
        //console.log(this.isfirstLoad, this.bckBtn.isfirstLoad);
        var id = this.navParams.get('id');
        //console.log(id);
        var data = this.navParams.get('data');
        if (data) {
            //console.log(data);
            this.page.title = data.title.rendered;
            try {
                this.page.image = data['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']['portfolio-thumb'].source_url;
                this.page.imgFull = data['_embedded']['wp:featuredmedia'][0].source_url;
            }
            catch (exc) { }
            this.page.isLoading = false;
            var render = this.vC.render(data.content.rendered);
            this.page.content = render.html;
            this.page.scripts = render.scripts;
            this.loadScripts();
        }
        else {
            this.pageProv.getPage(id).then(function (data) {
                //console.log(data);
                _this.page.title = data.title.rendered;
                try {
                    _this.page.image = data['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']['portfolio-thumb'].source_url;
                    _this.page.imgFull = data['_embedded']['wp:featuredmedia'][0].source_url;
                }
                catch (exc) { }
                _this.page.isLoading = false;
                var render = _this.vC.render(data.content.rendered);
                _this.page.content = render.html;
                _this.page.scripts = render.scripts;
                _this.loadScripts();
                //console.log('loadpost');
            }).catch(function (err) {
                _this.toastCtrl.create({
                    message: "No se pudo obtener la información",
                    duration: 3000
                }).present();
                _this.navCtrl.pop();
                console.log(err);
            });
        }
    };
    PaginaPage.prototype.loadScripts = function () {
        var _this = this;
        this.page.scripts.forEach(function (script) {
            var eleScript = document.createElement('script');
            eleScript.src = script;
            eleScript.onload = function () {
                window.onload(null); /**/
            };
            _this.scriptcontainer.nativeElement.appendChild(eleScript);
        });
    };
    PaginaPage.prototype.gback = function () {
        console.log(this.navCtrl.canGoBack());
        if (this.navCtrl.canGoBack()) {
            this.navCtrl.pop();
        }
        else {
            window.history.back();
        }
    };
    PaginaPage.prototype.openModal = function () {
        //if(this.page.imgFull) this.navCtrl.push(ImageViwerPage, { src: this.page.imgFull });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('scriptscontainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], PaginaPage.prototype, "scriptcontainer", void 0);
    PaginaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pagina',template:/*ion-inline-start:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\pagina\pagina.html"*/'<ion-header>\n    <ion-navbar color="dark">\n        <ion-buttons left>\n            <button *ngIf="isfirstLoad && !navCtrl.canGoBack()" ion-button icon-only (click)="gback()" [ngClass]="{\'customBackButton\': pltfrm.is(\'android\') || pltfrm.is(\'windows\') }">\n            <ion-icon name="arrow-back"></ion-icon>\n          </button>\n        </ion-buttons>\n        <button *ngIf="!isfirstLoad" ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{page.title}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-spinner *ngIf="page.isLoading" name="bubbles"></ion-spinner>\n    <img *ngIf="page.image" [imageViewer]="page.imgFull" [src]="page.image" />\n    <div #scriptscontainer style="display: none;"></div>\n    <div class="bootstrap-wrapper" style="padding: 15px;" [innerHTML]="page.content | sanitizeHtml"></div>\n</ion-content>'/*ion-inline-end:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\pagina\pagina.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_pages_pages__["a" /* PagesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_backbutton_backbutton__["a" /* BackbuttonProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_visual_composer_visual_composer__["a" /* VisualComposerProvider */]])
    ], PaginaPage);
    return PaginaPage;
}());

//# sourceMappingURL=pagina.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VentaEntradasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VentaEntradasPage = /** @class */ (function () {
    function VentaEntradasPage() {
        this.isLoading = true;
    }
    VentaEntradasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (!window.EBWidgets) {
            var eleScript = document.createElement('script');
            eleScript.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
            eleScript.onload = function () {
                window.EBWidgets.createWidget({
                    // Required
                    widgetType: 'checkout',
                    eventId: '53638109028',
                    iframeContainerId: 'eventbrite-widget-container-53638109028',
                    // Optional
                    iframeContainerHeight: 425,
                });
                _this.frmLoad();
            };
            this.scriptcontainer.nativeElement.appendChild(eleScript);
        }
        else {
            window.EBWidgets.createWidget({
                // Required
                widgetType: 'checkout',
                eventId: '53638109028',
                iframeContainerId: 'eventbrite-widget-container-53638109028',
                // Optional
                iframeContainerHeight: 425,
            });
            this.frmLoad();
        }
    };
    VentaEntradasPage.prototype.frmLoad = function () {
        this.isLoading = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('scriptscontainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], VentaEntradasPage.prototype, "scriptcontainer", void 0);
    VentaEntradasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-venta-entradas',template:/*ion-inline-start:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\venta-entradas\venta-entradas.html"*/'<ion-header>\n  <ion-navbar color="dark">\n      <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n      <ion-title>Entradas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="isLoading">\n    <ion-spinner name="bubbles"></ion-spinner>\n  </div>\n  <div #scriptscontainer style="display: none;"></div>\n  <div id="eventbrite-widget-container-53638109028"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\venta-entradas\venta-entradas.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], VentaEntradasPage);
    return VentaEntradasPage;
}());

//# sourceMappingURL=venta-entradas.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_artist_loader_artist_loader__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artista_artista__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_backbutton_backbutton__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ArtistasPage = /** @class */ (function () {
    function ArtistasPage(navCtrl, navParams, aL, bkBtn) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aL = aL;
        this.bkBtn = bkBtn;
        this.artistas = null;
        this.isLoading = true;
        this.errorLoading = false;
        this.searchTerm = "";
        this.bkBtn.isfirstLoad = false;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]();
    }
    ArtistasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadArtistas().then(function () {
            _this.artistas = _this.aL.artistas;
            _this.searchControl.valueChanges.debounceTime(500).subscribe(function (search) {
                if (!_this.isLoading && !_this.errorLoading) {
                    _this.artistas = _this.aL.filterArtist(search);
                }
                else {
                    _this.artistas = _this.aL.artistas;
                }
            });
        });
    };
    ArtistasPage.prototype.checkInitialChange = function (item, itemIndex, items) {
        if (itemIndex == 0)
            return item.nombre[0];
        if (item.nombre[0] != items[itemIndex - 1].nombre[0])
            return item.nombre[0];
        return null;
    };
    ArtistasPage.prototype.loadArtistas = function () {
        var _this = this;
        this.isLoading = true;
        return this.aL.loadArtist().then(function () {
            _this.searchTerm = "";
            _this.isLoading = false;
            _this.errorLoading = false;
        }).catch(function (err) {
            console.log(err);
            _this.isLoading = false;
            _this.errorLoading = true;
        });
        ;
    };
    ArtistasPage.prototype.doRefresh = function (ev) {
        this.loadArtistas().then(function () { return ev.complete(); }).catch(function () { return ev.complete(); });
    };
    ArtistasPage.prototype.lnkArtista = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__artista_artista__["a" /* ArtistaPage */], { id: id });
    };
    ArtistasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-artistas',template:/*ion-inline-start:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\artistas\artistas.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Artistas 2018</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top color="dark">\n    <ion-searchbar [(ngModel)]="searchTerm"  [formControl]="searchControl"></ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher *ngIf="!isLoading" (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Recargando...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-spinner *ngIf="isLoading" name="bubbles"></ion-spinner>\n  <ion-list [ngStyle]="{visibility: (isLoading)?\'hidden\':\'visible\'}" [virtualScroll]="artistas" [headerFn]="checkInitialChange" bufferRatio="2" approxItemHeight="96px">\n\n    <ion-item-divider *virtualHeader="let header">\n      {{header}}\n    </ion-item-divider>\n\n    <ion-item *virtualItem="let artista" (click)="lnkArtista(artista.id)">\n      <ion-thumbnail item-start>\n        <img [src]="artista.menuimage">\n      </ion-thumbnail>\n      <span class="oswaldFont" style="font-size: 1.4em; font-family: \'Oswald\', sans-serif;">{{artista.nombre}}</span>\n    </ion-item>\n  </ion-list>\n  <!--ion-list [ngStyle]="{visibility: (isLoading)?\'hidden\':\'visible\'}">\n    <ion-item *ngFor="let artista of aL.artistas" (click)="lnkArtista(artista.id)">\n      <ion-thumbnail item-start>\n        <img [src]="artista.menuimage">\n      </ion-thumbnail>\n      <span style="font-size: 1.4em; font-family: \'Oswald\', sans-serif;">{{artista.nombre}}</span>\n    </ion-item>\n  </ion-list-->\n  <button *ngIf="errorLoading && aL.artistas.length < 1" ion-button icon-start block strong solid color="danger" disabled><ion-icon style="zoom:2.0;" name="information"></ion-icon> Error al cargar datos...</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\artistas\artistas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_artist_loader_artist_loader__["a" /* ArtistLoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_backbutton_backbutton__["a" /* BackbuttonProvider */]])
    ], ArtistasPage);
    return ArtistasPage;
}());

//# sourceMappingURL=artistas.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_backbutton_backbutton__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_artist_loader_artist_loader__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArtistaPage = /** @class */ (function () {
    function ArtistaPage(navCtrl, navParams, bckBtn, lA, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bckBtn = bckBtn;
        this.lA = lA;
        this.toastCtrl = toastCtrl;
        this.artistInfo = {
            nombre: 'Cargando...',
            descripcion: 'Cargando...',
            images: null,
            menuimage: null
        };
        this.gradient = null;
        if (this.bckBtn.isfirstLoad) {
            console.log('firstload-pagina');
            this.bckBtn.isfirstLoad = false;
            var actLoc = window.location.href;
            window.history.replaceState(null, null, '#/artistas');
            window.history.pushState(null, null, actLoc);
        }
    }
    ArtistaPage.prototype.htmlEntities = function (data) {
        var ele = document.createElement('span');
        ele.innerHTML = data;
        return ele.textContent;
    };
    ArtistaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var id = this.navParams.get('id');
        console.log(id);
        if (id) {
            if (this.lA.artistas.length == 0) {
                this.lA.loadArtist().then(function () {
                    var tmpArt = _this.lA.getArtist(id);
                    if (tmpArt) {
                        _this.artistInfo = tmpArt;
                        _this.artistInfo.descripcion = _this.htmlEntities(_this.artistInfo.descripcion);
                        _this.loadGradient();
                    }
                    else {
                        _this.navCtrl.pop();
                        _this.toastCtrl.create({
                            message: 'Información no disponible',
                            duration: 1500,
                            closeButtonText: "OK",
                            showCloseButton: true
                        }).present();
                    }
                });
            }
            else {
                var tmpArt = this.lA.getArtist(id);
                if (tmpArt) {
                    this.artistInfo = tmpArt;
                    this.artistInfo.descripcion = this.htmlEntities(this.artistInfo.descripcion);
                    this.loadGradient();
                }
                else {
                    this.navCtrl.pop();
                    this.toastCtrl.create({
                        message: 'Información no disponible',
                        duration: 1500,
                        closeButtonText: "OK",
                        showCloseButton: true
                    }).present();
                }
                //console.log(this.artistInfo);
            }
        }
        else {
            this.navCtrl.pop();
            this.toastCtrl.create({
                message: 'Información no disponible',
                duration: 1500,
                closeButtonText: "OK",
                showCloseButton: true
            }).present();
        }
    };
    ArtistaPage.prototype.loadGradient = function () {
        if (this.artistInfo.menuimage) {
            this.gradient = new Granim({
                element: this.canvasEl.nativeElement,
                direction: 'diagonal',
                isPausedWhenNotInView: true,
                image: {
                    source: this.artistInfo.menuimage,
                    blendingMode: 'multiply',
                    stretchMode: ['stretch', 'stretch']
                },
                states: {
                    "default-state": {
                        gradients: [
                            ['#6a9113', '#fff'],
                            ['#fff', '#6a9113']
                        ]
                    }
                }
            });
        }
    };
    ArtistaPage.prototype.ionViewWillUnload = function () {
        if (this.gradient)
            this.gradient.destroy();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('artCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ArtistaPage.prototype, "canvasEl", void 0);
    ArtistaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-artista',template:/*ion-inline-start:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\artista\artista.html"*/'<ion-content class="container transparent-header">\n  <ion-header>\n    <ion-navbar>\n    </ion-navbar>\n  </ion-header>\n  <div class="card-profile">\n    \n    <ion-fab center>\n      <button ion-fab><ion-icon name="md-share"></ion-icon></button>\n      <ion-fab-list side="left">\n        <button ion-fab color="dark"><ion-icon name="logo-vimeo"></ion-icon></button>\n        <button ion-fab color="dark"><ion-icon name="logo-googleplus"></ion-icon></button>\n      </ion-fab-list>\n      <ion-fab-list side="right">\n        <button ion-fab color="dark"><ion-icon name="logo-facebook"></ion-icon></button>\n        <button ion-fab color="dark"><ion-icon name="logo-twitter"></ion-icon></button>\n      </ion-fab-list>\n    </ion-fab>\n    <canvas #artCanvas></canvas>\n    <!--div class="card-profile_visual">\n      <div class="before" \n        [ngStyle]="{ \n          background: (artistInfo.menuimage)?\n            \'url(\' + artistInfo.menuimage + \')no-repeat center center/cover\'\n            :\n            \'background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAABUUlRERkRMSkxMTkxEQkT490VOAAAAAXRSTlMAQObYZgAAAoxJREFUOI0dlImR5DAIRRXDbgaAEwCcAOAEZE/+qczTdFf1JQH/otd4SJWWf5+m7GjR28Z0TZW38pLjj1aWJl9eWaGfaCq/y4y012hPhqySnnbXe7Q6ulK6nZeV5bpjhyo9xLj7apvFSk3zSXEmtEZmNngYbhWhkmKne7XalnDrYcZMNwMlwuQuj/ezS2dJmpjEFwLe7T7zWE0zo22icr4dNZnfOLUp72rNcA8vcx3Y8r3MZpYOPSAC6mfSGRQBD1sZyFPd9b0mohN70CQTSa6+Ik15RifUaCjWq6zp2/9T697e5VsRKGUl4I4WnWpOxVAI7FoMEsrp2gLUCgH9J84B8o1Sgrb+0auEdrpocIQzU94mHBmMuliIlFemt0s8w3mUe0ssLnaecjllDunTW20d33ZxkUOoSIJbrWxZiHjdhV190e5AzjwONn4ASvTCC5CcKfywuFMBe1QpYjG0x38nJYAcR26k54o8YiXqeC7Hcth54lfwSPlHOBfOE9F0rGguJsr1V+GroafdEC+3qK2HX8Qsf0lWEwX0J29Pkh2lmFB33wKZBB8Rlhpj5AVBd6mTMYBC4cZzKNb6SygJJ3dnNIqkHnuwVgvaoCFcomyI6c+QEvxq0tKEiQCe9QoS18kaKFMl7wqEqJ2A6XkQMejE1dEcu7G/g1JRmHMOkjGIvqXHErayVgdJIIJsGBw1LzaijlFdExOIInKEOZ/oReBCsDlepSPBvRCAj/n10gfjFIml8rVSUDz2ISKeDxmFuviLVSzJOCqxtXToeJpNJr9Pnij+LQ4A/cgXDyuATWyPkrJ1En1cvPk3sB8VfMLIvwO5CKu+uC1OFNLvvoe0h97ieKNjsUkc/zQ6V/0CAoboTZwdKY4AAAAASUVORK5CYII=)\' }">\n      </div>\n      <div class="after"></div>\n    </div-->\n    <div class="card-profile_user-infos">\n      <span class="infos_name">{{artistInfo.nombre}}</span>\n      <span>Fecha: {{artistInfo.fechaHora}} - Escenario: {{artistInfo.escenario}}</span>\n    </div>\n    <div id="posts">\n      <ion-card>\n        <ion-card-content>\n          <p [innerHTML]="artistInfo.descripcion" ></p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\artista\artista.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_backbutton_backbutton__["a" /* BackbuttonProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_artist_loader_artist_loader__["a" /* ArtistLoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]])
    ], ArtistaPage);
    return ArtistaPage;
}());

//# sourceMappingURL=artista.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComoLlegarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_no_sleep_no_sleep__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var customDirectionsRenderer = {};
var ComoLlegarPage = /** @class */ (function () {
    function ComoLlegarPage(sleepProv) {
        var _this = this;
        this.sleepProv = sleepProv;
        this.allowLoc = false;
        this.intervalMap = null;
        this.wgLocation = null;
        this.pN = null;
        //pN = phoneNumber.toString();
        this.destino = { lat: 42.604027, lng: -8.641876 };
        this.Portamerica = { lat: 42.6034397, lng: -8.6391515 };
        this.Camping = { lat: 42.60177, lng: -8.64862 };
        this.map = null;
        this.lock = false;
        this.route = false;
        this.markerTent = null;
        this.kmlLayer = null;
        this.openMenu = false;
        this.calcRoute = function () {
            _this.routeDisplay = new customDirectionsRenderer(_this.markerMyPos, _this.destino, _this.map);
        };
    }
    ComoLlegarPage.prototype.updateMyPosJava = function (lat, lng) {
        if (this.map && this.markerMyPos) {
            var new_marker_position = new google.maps.LatLng(lat, lng);
            this.markerMyPos.setPosition(new_marker_position);
            if (this.route && this.routeDisplay)
                this.routeDisplay.updt();
        }
    };
    ;
    ComoLlegarPage.prototype.loadKmlLayer = function (src, map) {
        console.log('loadkml');
        this.kmlLayer = new google.maps.KmlLayer(src, {
            suppressInfoWindows: false,
            preserveViewport: true,
            map: map
        });
    };
    ComoLlegarPage.prototype.randomString = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    ComoLlegarPage.prototype.initMap = function () {
        var _this = this;
        customDirectionsRenderer = function (startPoint, endPoint, map) {
            //!!!!! reference to our class
            var that = this;
            this.directionsDisplay = new google.maps.DirectionsRenderer({
                draggable: false,
                suppressMarkers: true,
                map: map,
                preserveViewport: true
            });
            google.maps.event.addListener(this.directionsDisplay, 'directions_changed', function () {
                checkWaypoints();
            });
            this.directionsService = new google.maps.DirectionsService();
            var draggedMarker;
            var waypointsMarkers = new Array();
            this.map = map;
            this.polyline = '';
            this.polylinePoints = [];
            //<-- create Start and Stop Markers
            if (startPoint instanceof google.maps.LatLng)
                this.startMarker = new google.maps.Marker({
                    position: startPoint,
                    title: 'Start',
                    map: map,
                    draggable: false,
                    optimized: false
                });
            else if (startPoint instanceof google.maps.Marker)
                this.startMarker = startPoint;
            else
                this.startMarker = new google.maps.Marker({
                    position: startPoint,
                    title: 'End',
                    map: map,
                    draggable: false,
                    optimized: false
                });
            if (endPoint instanceof google.maps.LatLng)
                this.endMarker = new google.maps.Marker({
                    position: endPoint,
                    title: 'End',
                    map: map,
                    draggable: false,
                    optimized: false
                });
            else if (endPoint instanceof google.maps.Marker)
                this.endMarker = endPoint;
            else
                this.endMarker = new google.maps.Marker({
                    position: endPoint,
                    title: 'End',
                    map: map,
                    draggable: false,
                    optimized: false
                });
            //-->
            //<-- add events listeners to Start/Stop Markers
            google.maps.event.addListener(this.startMarker, 'dragend', dragEnd);
            google.maps.event.addListener(this.startMarker, 'dragstart', dragStart);
            google.maps.event.addListener(this.startMarker, 'drag', drag);
            google.maps.event.addListener(this.endMarker, 'dragend', dragEnd);
            google.maps.event.addListener(this.endMarker, 'dragstart', dragStart);
            google.maps.event.addListener(this.endMarker, 'drag', drag);
            //-->
            //<-- update directionsRenderer true - snap markers to nearest streets
            update(true);
            //-->
            //<--privates
            ////<-- event handlers
            function dragStart() {
                draggedMarker = this;
            }
            function dragEnd() {
                clearTimeout(this.timeout);
                update(true);
            }
            function drag() {
                if (this.timeout !== undefined) {
                    return;
                }
                this.timeout = setTimeout(function () { update(false); }, 200);
            }
            ////-->
            ////<-- create draggable markers for Waypoints from given array of latlng objects
            function createWaypointsMarkers(wpoints) {
                waypointsMarkers.forEach(function (obj, idx) {
                    obj.setMap(null);
                });
                waypointsMarkers = [];
                wpoints.forEach(function (obj, idx) {
                    var marker = new google.maps.Marker({
                        position: obj,
                        map: that.map,
                        draggable: true,
                        optimized: false,
                        title: idx.toString()
                    });
                    waypointsMarkers.push(marker);
                    google.maps.event.addListener(marker, 'dragend', dragEnd);
                    google.maps.event.addListener(marker, 'dragstart', dragStart);
                    google.maps.event.addListener(marker, 'drag', drag);
                });
            }
            ////-->
            ////-->  check if new waypoint was created
            function checkWaypoints() {
                if (that.directionsDisplay.getDirections() !== undefined) {
                    if (waypointsMarkers.length !=
                        that.directionsDisplay.getDirections().routes[0].legs[0].via_waypoints.length) {
                        createWaypointsMarkers(that.directionsDisplay.getDirections().routes[0].legs[0].via_waypoints);
                    }
                }
            }
            ////-->
            ////--> Update directionsRenderer when move or drop marker
            ////bool setMarkersPositions - snap markers to nearest streets?
            function update(setMarkersPositions) {
                if (draggedMarker !== undefined) {
                    draggedMarker.timeout = undefined;
                }
                that.directionsDisplay.preserveViewport = true;
                checkWaypoints();
                var waypoints = [];
                waypointsMarkers.forEach(function (obj, idx) {
                    waypoints.push({ location: obj.getPosition(), stopover: false });
                });
                var request = {
                    origin: that.startMarker.getPosition(),
                    destination: that.endMarker.getPosition(),
                    waypoints: waypoints,
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                };
                that.directionsService.route(request, function (response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        that.directionsDisplay.setDirections(response);
                        if (waypointsMarkers.length != response.routes[0].legs[0].via_waypoints.length) {
                            createWaypointsMarkers(response.routes[0].legs[0].via_waypoints);
                        }
                        if (setMarkersPositions) {
                            that.startMarker.setPosition(response.routes[0].legs[0].start_location);
                            that.endMarker.setPosition(response.routes[0].legs[0].end_location);
                            response.routes[0].legs[0].via_waypoints.forEach(function (obj, idx) {
                                waypointsMarkers[idx].setPosition(obj);
                            });
                            that.polyline = response.routes[0].overview_polyline.points;
                            that.polylinePoints = response.routes[0].overview_path;
                        }
                    }
                });
            }
            this.updt = update;
            ////-->
            //-->
        };
        customDirectionsRenderer.prototype = new google.maps.MVCObject();
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: this.Portamerica,
            scrollwheel: true,
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            zoomControl: false,
        });
        this.markerMyPos = new google.maps.Marker({
            position: { lat: 42.6034397, lng: -8.6391515 },
            map: this.map,
            name: "Tu posición"
        });
        var infowindowMyPos = new google.maps.InfoWindow({
            content: 'Tu Posición'
        });
        this.markerMyPos.addListener('click', function () {
            infowindowMyPos.open(_this.map, _this.markerMyPos);
        });
        this.intervalMap = setInterval(function () {
            if (_this.lock)
                _this.map.setCenter(new google.maps.LatLng(_this.markerMyPos.getPosition().lat(), _this.markerMyPos.getPosition().lng()));
        }, 1000);
        this.wgLocation = navigator.geolocation.watchPosition(function (position) {
            //console.log(position);
            _this.allowLoc = true;
            var new_marker_position = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.markerMyPos.setPosition(new_marker_position);
            if (_this.route && _this.routeDisplay) {
                _this.routeDisplay.updt();
            }
        }, function (err) {
            _this.allowLoc = false;
        }, { enableHighAccuracy: true });
        var markerPort = new google.maps.Marker({
            position: { lat: this.Portamerica.lat, lng: this.Portamerica.lng },
            map: this.map,
            name: "Portamérica"
        });
        var infowindowPort = new google.maps.InfoWindow({
            content: '<img src="./assets/icon/pa-favicon.png"/><h1>Portamérica</h1>'
        });
        markerPort.addListener('click', function () {
            infowindowPort.open(this.map, markerPort);
        });
        this.loadKmlLayer("http://portamerica.es/app/Portamerica.kmz?_noCache=" + this.randomString(), this.map);
        var legend = document.getElementById('legend');
        this.map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend);
        if (localStorage.getItem('myTent')) {
            var posT = JSON.parse(localStorage.getItem('myTent'));
            this.markerTent = new google.maps.Marker({
                position: { lat: posT.lat, lng: posT.lng },
                icon: 'img/tent.png',
                map: this.map,
                animation: google.maps.Animation.DROP
            });
            var infowindowTent = new google.maps.InfoWindow({
                content: "Tu tienda"
            });
            this.markerTent.addListener('click', function () {
                infowindowTent.open(this.map, this.markerTent);
            });
        }
    };
    ComoLlegarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.sleepProv.enable();
        if ((typeof google === 'object' && typeof google.maps === 'object')) {
            this.initMap();
        }
        else {
            console.log('google not exist');
            var scrpt = document.createElement('script');
            scrpt.onload = function () {
                _this.initMap();
            };
            scrpt.onerror = function (err) {
                console.log(err);
            };
            scrpt.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBDRgZoncuPSloRkXFSbKpn6GIfWPA_-FQ";
            this.scriptcontainer.nativeElement.appendChild(scrpt);
        }
    };
    ComoLlegarPage.prototype.togglePopupMenu = function () {
        return this.openMenu = !this.openMenu;
    };
    ComoLlegarPage.prototype.calculateRoute = function () {
        this.route = !this.route;
        if (this.route) {
            this.calcRoute();
        }
        else {
            this.routeDisplay.directionsDisplay.setMap(null);
            this.routeDisplay.endMarker.setMap(null);
        }
        this.togglePopupMenu();
    };
    ComoLlegarPage.prototype.toogleLock = function () {
        this.lock = !this.lock;
        if (this.lock)
            this.map.setZoom(16);
        this.togglePopupMenu();
    };
    ComoLlegarPage.prototype.toggleKml = function () {
        if (this.kmlLayer) {
            if (this.kmlLayer.getMap()) {
                this.kmlLayer.setMap(null);
            }
            else {
                this.kmlLayer.setMap(this.map);
            }
        }
        this.togglePopupMenu();
    };
    ComoLlegarPage.prototype.locPortamerica = function () {
        this.map.setCenter(new google.maps.LatLng(this.Portamerica.lat, this.Portamerica.lng));
        this.map.setZoom(18);
        this.togglePopupMenu();
    };
    ComoLlegarPage.prototype.locCamping = function () {
        this.map.setCenter(new google.maps.LatLng(this.Camping.lat, this.Camping.lng));
        this.map.setZoom(17);
        this.togglePopupMenu();
    };
    ComoLlegarPage.prototype.ionViewWillUnload = function () {
        console.log('finish map');
        if (this.intervalMap)
            clearInterval(this.intervalMap);
        if (this.wgLocation)
            navigator.geolocation.clearWatch(this.wgLocation);
        this.sleepProv.disable();
    };
    ComoLlegarPage.prototype.openGMaps = function () {
        window.open('https://www.google.com/maps/dir/?api=1&destination=Carballeira+de+Caldas+de+Reis', '_blank');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('scriptscontainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ComoLlegarPage.prototype, "scriptcontainer", void 0);
    ComoLlegarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-como-llegar',template:/*ion-inline-start:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\como-llegar\como-llegar.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Cómo llegar</ion-title>\n		<ion-buttons right>\n			<button ion-button icon-only (click)="openGMaps()">\n        <ion-icon name="open"></ion-icon>\n      </button>\n		</ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div #scriptscontainer style="display: none;"></div>\n	<ion-fab *ngIf="lock" class="blink" right top>\n		<button ion-fab mini color="danger">\n			<ion-icon name="locate"></ion-icon>\n		</button>\n	</ion-fab>\n  <div id="map"></div>\n	<div *ngIf="(kmlLayer && kmlLayer.getMap())" id="legend">\n		<div><img class="legendImg" src="https://mt.google.com/vt/icon/name=icons/onion/SHARED-mymaps-pin-container_4x.png,icons/onion/1899-blank-shape_pin_4x.png&highlight=FFEA00,ff000000&scale=2.0"/>Restaurante</div>\n		<div><img class="legendImg" src="https://mt.google.com/vt/icon/name=icons/onion/SHARED-mymaps-pin-container_4x.png,icons/onion/1899-blank-shape_pin_4x.png&highlight=880E4F,ff000000&scale=2.0"/>Hotel</div>\n		<div><img class="legendImg" src="https://mt.google.com/vt/icon/name=icons/onion/SHARED-mymaps-pin-container_4x.png,icons/onion/1899-blank-shape_pin_4x.png&highlight=0288D1,ff000000&scale=2.0"/>Servicios</div>\n	</div>\n  <div class="popup-menu">\n		<div class="popup-menu-overlay" [ngClass]="{\'in\': openMenu}" (click)="togglePopupMenu()"></div>\n		<div class="popup-menu-toggle" (click)="togglePopupMenu()" [ngClass]="{\'out\': openMenu }"></div>\n		<div class="popup-menu-panel" [ngClass]="{\'in\': openMenu}">\n			<div class="popup-menu-item">\n				<ion-icon name="home"></ion-icon>\n				<span>Colocar<br/>tienda</span>\n			</div>\n			<div *ngIf="allowLoc" class="popup-menu-item" (click)="calculateRoute()">\n				<ion-icon name="navigate"></ion-icon>\n				<span>{{(route)?\'Cancelar\':\'Calcular\'}}<br/>Ruta</span>\n			</div>\n			<div class="popup-menu-item" (click)="toggleKml()">\n				<div *ngIf="(kmlLayer && kmlLayer.getMap()); else showTemplateInfo">\n						<ion-icon class="fa-eye-slash"></ion-icon>\n						<span>Ocultar Info</span>\n				</div>\n				<ng-template #showTemplateInfo>\n						<ion-icon class="fa-eye"></ion-icon>\n						<span>Mostrar Info</span>\n				</ng-template>\n			</div>\n			<div *ngIf="allowLoc" class="popup-menu-item" (click)="toogleLock()">\n					<div *ngIf="lock; else showTemplateLock">\n							<ion-icon class="fa-unlock"></ion-icon>\n							<span>Desactivar Seguimiento</span>\n					</div>\n					<ng-template #showTemplateLock>\n							<ion-icon class="fa-lock"></ion-icon>\n							<span>Activar Seguimiento</span>\n					</ng-template>\n			</div>\n			<div class="popup-menu-item" (click)="locPortamerica()">\n				<img src="./assets/imgs/logo.png" style="width: 33%;display: block;margin: 0 auto;">\n				<span>Loc. PortAmérica</span>\n			</div>\n			<div class="popup-menu-item" (click)="locCamping()">\n				<ion-icon class="fa-tree"></ion-icon> \n				<span>Localizar Camping</span>\n			</div>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\produccion\Desktop\Nueva carpeta\pwaportamerica\src\pages\como-llegar\como-llegar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_no_sleep_no_sleep__["a" /* NoSleepProvider */]])
    ], ComoLlegarPage);
    return ComoLlegarPage;
}());

//# sourceMappingURL=como-llegar.js.map

/***/ })

},[271]);
//# sourceMappingURL=main.js.map