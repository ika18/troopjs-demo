requirejs.config({
    baseUrl: '.',
    packages: [{
        name: 'jquery',
        location: 'bower_components/jquery/dist',
        main: 'jquery'
    }, {
        name: 'troopjs',
        location: 'bower_components/troopjs',
        main: 'maxi'
    }, {
        name: 'when',
        location: 'bower_components/when',
        main: 'when'
    }, {
        name: 'poly',
        location: 'bower_components/poly',
        main: 'poly'
    }],
    "map" : {
        "*" : {
            "template" : "troopjs-requirejs/template"
        }
    }
});

require(['require', 'jquery', 'troopjs'], function (parentRequire, $) {
    parentRequire([ "troopjs-browser/application/widget", "troopjs-browser/route/widget", "troopjs-browser/ajax/service" ], function Strap (Application, RouteWidget, AjaxService) {
        $(function () {
            Application($("html"), "bootstrap", RouteWidget($(window), "route"), AjaxService()).start();
        });
    });
});