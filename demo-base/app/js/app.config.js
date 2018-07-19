'use strict';

angular.module('myApp').
    config(['$locationProvider', '$routeProvider', 
        function($locationProvider, $routeProvider){
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/login', { template: '<login></login>' } ).
                when('/inicio', { template: '<inicio></inicio>' } ).
                otherwise('/');
        }
]);