"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var demo_routing_1 = require("./demo.routing");
var overview_component_1 = require("./overview.component");
var office_interaction_component_1 = require("./office-interaction.component");
var office_module_1 = require("../office/office.module");
var office_ui_module_1 = require("../office-ui/office-ui.module");
var excel_service_1 = require("../office/excel.service");
var DemoModule = (function () {
    function DemoModule() {
    }
    return DemoModule;
}());
DemoModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            demo_routing_1.demoRouting,
            office_module_1.OfficeModule,
            office_ui_module_1.OfficeUiModule
        ],
        providers: [
            excel_service_1.ExcelService
        ],
        declarations: [
            overview_component_1.OverviewComponent, office_interaction_component_1.OfficeInteractionComponent
        ],
        exports: [
            overview_component_1.OverviewComponent, office_interaction_component_1.OfficeInteractionComponent
        ]
    })
], DemoModule);
exports.DemoModule = DemoModule;
//# sourceMappingURL=demo.module.js.map