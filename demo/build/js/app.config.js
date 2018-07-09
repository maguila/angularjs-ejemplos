app.config(function($locationProvider, $routeProvider){
    //$locationProvider.hashPrefix('!vista');

    $routeProvider
    .when("/", {
        template: "pagina principal"
    })
    .when("/demo", {
        template: "<user-list></user-list>"
    })
    .when("/demo2", {
        templateUrl: "component/demo2/demo2.html"
    })
    .otherwise({
        template:'pagina no encontrada'
    });
});