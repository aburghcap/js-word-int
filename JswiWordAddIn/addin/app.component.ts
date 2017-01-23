import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'addin',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    title: string = 'JavaScript Word Add-in';

    constructor() {

    }

    ngOnInit() {
    }
}
