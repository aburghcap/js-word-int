import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'overview.component.html',
    styleUrls: ['overview.component.css']
})

export class OverviewComponent {
    title: string = "Entry page";
    description: string = 'Excel add-in sample with Angular 2 and Office UI Fabric';

    details: Object[] = [
        {
            route: '/office',
            title: 'OfficeJS integration'
        }
    ];

    constructor() {
    }
}