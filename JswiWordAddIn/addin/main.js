/// <reference path="../typings/globals/office-js/index.d.ts" />
"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
var core_1 = require("@angular/core");
core_1.enableProdMode();
//use this to run in browser for dev
//platformBrowserDynamic().bootstrapModule(AppModule);
//bootstrap with Office.js for in Office
Office.initialize = function () {
    console.log("Office init: bootstrapping Angular2");
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
};
//# sourceMappingURL=main.js.map