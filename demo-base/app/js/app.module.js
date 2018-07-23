'use strict';
var app = angular.module("myApp", ['ngMaterial', 'ngMessages', 'ngRoute'])

app.controller('myController', ['$scope', function($scope){

    $scope.hola = "hola angularjs !!!";
    console.log("HOLA!!!! dsdas");
        
}]);
