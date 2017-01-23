"use strict";
var router_1 = require("@angular/router");
var overview_component_1 = require("./overview.component");
var office_interaction_component_1 = require("./office-interaction.component");
exports.routes = [
    {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
    },
    {
        path: 'overview',
        component: overview_component_1.OverviewComponent
    },
    {
        path: 'office',
        component: office_interaction_component_1.OfficeInteractionComponent
    }
];
exports.demoRouting = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=demo.routing.js.map