/// <reference path="../../typings/globals/office-js/index.d.ts" />
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
var ExcelService = (function () {
    function ExcelService() {
        this.workbook = Office.context.document;
        //private bindingName: string = 'addinBinding';
        this.bindingName = 'addinBinding';
        this.namedItemName = "'Sheet1'!A1";
    }
    ExcelService.prototype.bindToWorkBook = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.workbook.bindings.addFromNamedItemAsync(_this.namedItemName, Office.BindingType.Matrix, { id: _this.bindingName }, function (addBindingResult) {
                if (addBindingResult.status === Office.AsyncResultStatus.Failed) {
                    reject({
                        error: 'Unable to bind to workbook. Error: ' + addBindingResult.error.message
                    });
                }
                else {
                    _this.binding = addBindingResult.value;
                    resolve({
                        success: 'Created binding ' + _this.bindingName + ' on ' + _this.namedItemName
                    });
                }
            });
        });
    };
    ExcelService.prototype.setSampleText = function (text) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.binding) {
                _this.binding.setDataAsync([[text]], function (result) {
                    if (result.status === Office.AsyncResultStatus.Failed) {
                        reject({ error: 'Failed to update value. Error: ' + result.error.message });
                    }
                    else {
                        resolve({
                            success: 'Updated value of ' + _this.namedItemName + ' to be ' + text
                        });
                    }
                });
            }
            else {
                reject({
                    error: 'binding has not been created. bindToWorkBook must be called first'
                });
            }
        });
    };
    return ExcelService;
}());
ExcelService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ExcelService);
exports.ExcelService = ExcelService;
//# sourceMappingURL=excel.service.js.map