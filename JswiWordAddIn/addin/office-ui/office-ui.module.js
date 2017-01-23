"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var back_button_component_1 = require("./back-button.component");
var command_bar_component_1 = require("./command-bar.component");
var OfficeUiModule = (function () {
    function OfficeUiModule() {
    }
    return OfficeUiModule;
}());
OfficeUiModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule
        ],
        providers: [],
        declarations: [
            back_button_component_1.BackButtonComponent,
            command_bar_component_1.CommanBarComponent
        ],
        exports: [
            back_button_component_1.BackButtonComponent,
            command_bar_component_1.CommanBarComponent
        ]
    })
], OfficeUiModule);
exports.OfficeUiModule = OfficeUiModule;
//# sourceMappingURL=office-ui.module.js.map