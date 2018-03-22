webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animal-form/animal-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onSubmit()\">\n    <label for=\"name\">Pet name:</label>\n    <input name=\"name\" type=\"text\" [(ngModel)]=\"data.name\">\n\n    <label for=\"type\">Pet type:</label>\n    <input name=\"type\" type=\"text\" [(ngModel)]=\"data.type\">\n\n    <label for=\"description\">Description:</label>\n    <input name=\"description\" type=\"text\" [(ngModel)]=\"data.description\">\n\n    <label for=\"\">Skills (optional):</label>\n\n    <div class=\"animal-form-skills\">\n        <span>\n            <label for=\"skill1\">Skill 1:</label>\n            <input name=\"skill1\" type=\"text\" [(ngModel)]=\"data.skills[0]\">\n        </span>\n\n        <span>\n            <label for=\"skill2\">Skill 2:</label>\n            <input name=\"skill2\" type=\"text\" [(ngModel)]=\"data.skills[1]\">\n        </span>\n\n        <span>\n            <label for=\"skill3\">Skill 3:</label>\n            <input name=\"skill3\" type=\"text\" [(ngModel)]=\"data.skills[2]\">\n        </span>\n    </div>\n\n    <div class=\"animal-form-buttons\">\n        <span>\n            <input type=\"submit\" value=\"Add pet\">\n            <input type=\"button\" [routerLink]=\"['']\" value=\"Cancel\">\n        </span>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/animal-form/animal-form.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: inline-block;\n  border: 1px solid gray;\n  padding: 16px; }\n  :host form label {\n    display: block;\n    color: gray;\n    font-weight: bold; }\n  :host form input[type=text] {\n    width: 275px;\n    padding: 4px 2px;\n    margin-bottom: 8px;\n    outline: none;\n    border: 1px solid black;\n    border-radius: 6px; }\n  :host form .animal-form-skills {\n    margin-top: 8px;\n    margin-left: 16px; }\n  :host form .animal-form-skills input[type=text] {\n      width: 259px !important; }\n  :host form .animal-form-buttons {\n    margin-left: 32px; }\n  :host form .animal-form-buttons input[type=submit],\n    :host form .animal-form-buttons input[type=button] {\n      text-decoration: none;\n      cursor: pointer;\n      padding: 16px;\n      font-size: 20px;\n      font-weight: bold;\n      color: white;\n      background-color: #66bbff;\n      border-radius: 12px;\n      outline: none;\n      border: none; }\n  :host form .animal-form-buttons input[type=submit]:first-child,\n      :host form .animal-form-buttons input[type=button]:first-child {\n        margin-right: 32px; }\n"

/***/ }),

/***/ "./src/app/animal-form/animal-form.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AnimalFormComponent = /** @class */ (function () {
    function AnimalFormComponent() {
        this.formSubmitted = new core_1.EventEmitter();
    }
    AnimalFormComponent.prototype.ngOnInit = function () {
        this.data = this.model || {
            name: "",
            type: "",
            description: "",
            skills: ["", "", ""]
        };
    };
    AnimalFormComponent.prototype.onSubmit = function () {
        delete this.data["likes"];
        this.formSubmitted.emit(this.data);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AnimalFormComponent.prototype, "model", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AnimalFormComponent.prototype, "buttonText", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AnimalFormComponent.prototype, "formSubmitted", void 0);
    AnimalFormComponent = __decorate([
        core_1.Component({
            selector: 'app-animal-form',
            template: __webpack_require__("./src/app/animal-form/animal-form.component.html"),
            styles: [__webpack_require__("./src/app/animal-form/animal-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AnimalFormComponent);
    return AnimalFormComponent;
}());
exports.AnimalFormComponent = AnimalFormComponent;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var create_animal_component_1 = __webpack_require__("./src/app/create-animal/create-animal.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var page_not_found_component_1 = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
var details_component_1 = __webpack_require__("./src/app/details/details.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var routes = [
    { path: "", component: home_component_1.HomeComponent },
    { path: "new", component: create_animal_component_1.CreateAnimalComponent },
    { path: "details/:_id", component: details_component_1.DetailsComponent },
    { path: "edit/:_id", component: edit_component_1.EditComponent },
    { path: "**", component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var create_animal_component_1 = __webpack_require__("./src/app/create-animal/create-animal.component.ts");
var animal_form_component_1 = __webpack_require__("./src/app/animal-form/animal-form.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var page_not_found_component_1 = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
var details_component_1 = __webpack_require__("./src/app/details/details.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                create_animal_component_1.CreateAnimalComponent,
                animal_form_component_1.AnimalFormComponent,
                home_component_1.HomeComponent,
                page_not_found_component_1.PageNotFoundComponent,
                details_component_1.DetailsComponent,
                edit_component_1.EditComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [
                http_service_1.HttpService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/create-animal/create-animal.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Pet Shelter</h1>\n<h4>Know of a pet needing a home?</h4>\n\n<div *ngIf=\"errors\">\n    <p *ngFor=\"let error of errors\"> {{ error }} </p>\n</div>\n\n<app-animal-form [buttonText]=\"buttonText\" (formSubmitted)=\"createAnimal($event)\">\n</app-animal-form>"

/***/ }),

/***/ "./src/app/create-animal/create-animal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create-animal/create-animal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var CreateAnimalComponent = /** @class */ (function () {
    function CreateAnimalComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    CreateAnimalComponent.prototype.ngOnInit = function () {
        this.buttonText = "Add pet";
    };
    CreateAnimalComponent.prototype.createAnimal = function (data) {
        var _this = this;
        this._httpService
            .createAnimal(data)
            .subscribe(function (res) {
            if (res["err"]) {
                var errors = Object.values(res["err"]["errors"]);
                _this.errors = errors.map(function (error) { return error["message"]; });
            }
            else {
                _this._router.navigate([""]);
            }
        });
    };
    CreateAnimalComponent = __decorate([
        core_1.Component({
            selector: 'app-create-animal',
            template: __webpack_require__("./src/app/create-animal/create-animal.component.html"),
            styles: [__webpack_require__("./src/app/create-animal/create-animal.component.scss")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.Router])
    ], CreateAnimalComponent);
    return CreateAnimalComponent;
}());
exports.CreateAnimalComponent = CreateAnimalComponent;


/***/ }),

/***/ "./src/app/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"home-link\" [routerLink]=\"['']\">Home</a>\n\n<h1>Pet Shelter</h1>\n<h4 *ngIf=\"!data\">Loading...</h4>\n\n<div class=\"details-container\" *ngIf=\"data\">\n    <h4>Details about {{data.name}}</h4>\n\n    <table cellpadding=\"8\">\n        <tr>\n            <td>Pet Type:</td>\n            <td>{{data.type}}</td>\n        </tr>\n\n        <tr>\n            <td>Description:</td>\n            <td>{{data.description}}</td>\n        </tr>\n\n        <tr>\n            <td>Pet Skills:</td>\n            <td>\n                <p *ngFor=\"let skill of data.skills\">{{skill}}</p>\n            </td>\n        </tr>\n\n        <tr>\n            <td>Likes:</td>\n            <td>{{data.likes}}</td>\n        </tr>\n    </table>\n\n    <div class=\"details-buttons\">\n        <button (click)=\"likePet()\" [ngStyle]=\"likeButtonStyle\">Like this pet</button>\n        <button (click)=\"adoptPet()\">Adopt this pet!</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/details/details.component.scss":
/***/ (function(module, exports) {

module.exports = ".home-link {\n  position: absolute;\n  top: 32px;\n  right: 32px; }\n\n.details-container {\n  margin-left: 12px; }\n\ntd:first-child {\n  font-weight: bold;\n  vertical-align: top; }\n\ntd:last-child p:first-child {\n  margin-top: 0; }\n\n.details-buttons {\n  margin-top: 16px; }\n\n.details-buttons button {\n    cursor: pointer;\n    padding: 16px;\n    color: white;\n    font-weight: bold;\n    background-color: #7c9293;\n    border-radius: 6px;\n    outline: none;\n    border: none; }\n\n.details-buttons button:first-child {\n      margin-right: 20px; }\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(_httpService, _router, _activatedRoute) {
        var _this = this;
        this._httpService = _httpService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        var _id = this._activatedRoute.snapshot.params["_id"];
        this._httpService.getAnimalById(_id).subscribe(function (res) {
            if (res["err"] || !res["animals"][0]) {
                _this._router.navigate(["notfound"]);
            }
            _this.data = res["animals"][0];
        });
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent.prototype.likePet = function () {
        this.likeButtonStyle = {
            pointerEvents: "none",
            opacity: 0.5
        };
        this.data["likes"]++;
        this._httpService.updateAnimal(this.data["_id"], {
            likes: this.data["likes"]
        }).subscribe(function (res) { return console.log("Pet liked."); });
    };
    DetailsComponent.prototype.adoptPet = function () {
        var _this = this;
        this._httpService.deleteAnimal(this.data["_id"]).subscribe(function () {
            _this._router.navigate([""]);
        });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-details',
            template: __webpack_require__("./src/app/details/details.component.html"),
            styles: [__webpack_require__("./src/app/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;


/***/ }),

/***/ "./src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Pet Shelter</h1>\n<h4>Edit this pet</h4>\n\n<div *ngIf=\"errors\">\n    <p *ngFor=\"let error of errors\"> {{ error }} </p>\n</div>\n\n<app-animal-form *ngIf=\"data\" [model]=\"data\" [buttonText]=\"buttonText\" (formSubmitted)=\"updateAnimal($event)\">\n</app-animal-form>"

/***/ }),

/***/ "./src/app/edit/edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _router, _activatedRoute) {
        var _this = this;
        this._httpService = _httpService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        var _id = this._activatedRoute.snapshot.params["_id"];
        this._httpService.getAnimalById(_id).subscribe(function (res) {
            if (res["err"] || !res["animals"][0]) {
                _this._router.navigate(["notfound"]);
            }
            _this.data = res["animals"][0];
        });
    }
    EditComponent.prototype.ngOnInit = function () {
        this.buttonText = "Edit pet";
    };
    EditComponent.prototype.updateAnimal = function (data) {
        var _this = this;
        this._httpService
            .updateAnimal(data["_id"], data)
            .subscribe(function (res) {
            if (res["err"]) {
                var errors = Object.values(res["err"]["errors"]);
                _this.errors = errors.map(function (error) { return error["message"]; });
            }
            else {
                _this._router.navigate([""]);
            }
        });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/edit/edit.component.scss")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;


/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Pet Shelter</h1>\n\n<h4 *ngIf=\"animals\">These pets are looking for a home!</h4>\n<h4 *ngIf=\"!animals\">There aren't any pets yet!</h4>\n\n<a [routerLink]=\"['new']\">Add a pet to the shelter</a>\n\n<table *ngIf=\"animals\">\n    <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Actions</th>\n    </tr>\n\n    <tr *ngFor=\"let animal of animals\">\n        <td>{{ animal.name }}</td>\n        <td>{{ animal.type }}</td>\n        <td>\n            <button (click)=\"goToDetails(animal._id)\">Details</button>\n            <button (click)=\"goToEdit(animal._id)\">Edit</button>\n        </td>\n    </tr>\n</table>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = "table {\n  display: inline-block;\n  margin-top: 16px;\n  border-collapse: collapse;\n  width: 100%; }\n  table th {\n    color: white;\n    font-weight: bold; }\n  table td, table th {\n    min-width: 200px;\n    border: 1px solid black;\n    text-align: left;\n    padding: 8px; }\n  table td:last-child, table th:last-child {\n      min-width: unset !important; }\n  table td:last-child button, table th:last-child button {\n        cursor: pointer;\n        padding: 6px 20px;\n        font-weight: bold;\n        color: white;\n        background-color: #9e9e98;\n        border-radius: 6px;\n        text-align: center;\n        border: none;\n        outline: none; }\n  table td:last-child button:first-child, table th:last-child button:first-child {\n          background-color: #778b9c;\n          margin: 0 20px; }\n  table td:last-child button:last-child, table th:last-child button:last-child {\n          margin-right: 20px; }\n  table tr:nth-child(odd) {\n    background-color: #dddddd; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService
            .getAllAnimals()
            .subscribe(function (res) {
            if (res["animals"].length != 0) {
                _this.animals = res["animals"].sort(function (a, b) {
                    if (a.type.toUpperCase() < b.type.toUpperCase())
                        return -1;
                    if (a.type.toUpperCase() > b.type.toUpperCase())
                        return 1;
                    return 0;
                });
            }
        });
    };
    HomeComponent.prototype.goToDetails = function (_id) {
        this._router.navigate(["details", _id]);
    };
    HomeComponent.prototype.goToEdit = function (_id) {
        this._router.navigate(["edit", _id]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAllAnimals = function () {
        return this._http.get("/animals");
    };
    HttpService.prototype.getAnimalById = function (_id) {
        return this._http.get("/animals/" + _id);
    };
    HttpService.prototype.createAnimal = function (props) {
        return this._http.post("/animals", props);
    };
    HttpService.prototype.updateAnimal = function (_id, props) {
        return this._http.put("/animals", { _id: _id, props: props });
    };
    HttpService.prototype.deleteAnimal = function (_id) {
        return this._http.delete("/animals/" + _id);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Page not found</h1>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map