'use strict';

angular.module('myApp').
    config(['$locationProvider', '$routeProvider', 
        function($locationProvider, $routeProvider){
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/login', { template: '<login></login>' } ).
                when('/inicio', { template: '<inicio></inicio>' } ).
                when('/admin', { template: '<admin></admin>' } ).
                when('/admin-bootstrap', { template: '<admin-bootstrap></admin-bootstrap>' } ).
                otherwise('/');
        }
]);