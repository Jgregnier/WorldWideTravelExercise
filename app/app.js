"use strict";

var app = angular.module("WorldWideTravelApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.
    when('/guide/list', {
      templateUrl: 'partials/GuideList.html',
      controller: 'GuideCtrl'
    }).
    otherwise('/guide/list');
});
