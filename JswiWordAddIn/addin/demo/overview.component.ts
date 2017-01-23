import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'overview.component.html',
    styleUrls: ['overview.component.css']
})

export class OverviewComponent {
    title: string = "Word Add-in";
    description: string = 'Excel example with Angular 2 and Office UI Fabric';
    
    details: Object[] = [
        {
            route: '/office',
            title: 'OfficeJS integration'
        }
    ];

    constructor() {
    }
}