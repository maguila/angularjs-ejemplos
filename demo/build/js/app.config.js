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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuY29uZmlnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFwcC5jb25maWcoZnVuY3Rpb24oJGxvY2F0aW9uUHJvdmlkZXIsICRyb3V0ZVByb3ZpZGVyKXtcbiAgICAvLyRsb2NhdGlvblByb3ZpZGVyLmhhc2hQcmVmaXgoJyF2aXN0YScpO1xuXG4gICAgJHJvdXRlUHJvdmlkZXJcbiAgICAud2hlbihcIi9cIiwge1xuICAgICAgICB0ZW1wbGF0ZTogXCJwYWdpbmEgcHJpbmNpcGFsXCJcbiAgICB9KVxuICAgIC53aGVuKFwiL2RlbW9cIiwge1xuICAgICAgICB0ZW1wbGF0ZTogXCI8dXNlci1saXN0PjwvdXNlci1saXN0PlwiXG4gICAgfSlcbiAgICAud2hlbihcIi9kZW1vMlwiLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiBcImNvbXBvbmVudC9kZW1vMi9kZW1vMi5odG1sXCJcbiAgICB9KVxuICAgIC5vdGhlcndpc2Uoe1xuICAgICAgICB0ZW1wbGF0ZToncGFnaW5hIG5vIGVuY29udHJhZGEnXG4gICAgfSk7XG59KTsiXSwiZmlsZSI6ImFwcC5jb25maWcuanMifQ==
