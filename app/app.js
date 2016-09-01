"use strict";

var app = angular.module("WorldWideTravelApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.
    when('/book/list', {
      templateUrl: 'partials/bookList.html',
      controller: 'bookCtrl'
    }).
    otherwise('/book/list');
});
