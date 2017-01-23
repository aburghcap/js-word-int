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
var core_1 = require("@angular/core");
var excel_service_1 = require("../office/excel.service");
var OfficeInteractionComponent = (function () {
    function OfficeInteractionComponent(excelService) {
        this.excelService = excelService;
        this.title = "Office interaction";
        this.description = "Type in the text you want to insert into cell A1 ('Sheet1'!A1) below.";
        this.feedback = '';
    }
    OfficeInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isBusy = true;
        this.feedback = 'binding to workbook';
        this.excelService
            .bindToWorkBook()
            .then(function (result) {
            _this.onResult(result);
        }, function (result) {
            _this.onResult(result);
        });
    };
    OfficeInteractionComponent.prototype.submit = function () {
        var _this = this;
        this.isBusy = true;
        this.excelService
            .setSampleText(this.userInput)
            .then(function (result) {
            _this.onResult(result);
        }, function (result) {
            _this.onResult(result);
        });
    };
    OfficeInteractionComponent.prototype.onResult = function (result) {
        this.feedback = result.error || result.success;
        this.isBusy = false;
    };
    return OfficeInteractionComponent;
}());
OfficeInteractionComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'office-interaction.component.html',
        styleUrls: ['office-interaction.component.css']
    }),
    __metadata("design:paramtypes", [excel_service_1.ExcelService])
], OfficeInteractionComponent);
exports.OfficeInteractionComponent = OfficeInteractionComponent;
//# sourceMappingURL=office-interaction.component.js.map