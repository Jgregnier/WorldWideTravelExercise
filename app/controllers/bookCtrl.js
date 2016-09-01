"use strict";

app.controller("bookCtrl", function ($scope, $http, $q) {

  $scope.books = null;

  $scope.getBook= function() {
    $q(function(resolve, reject) {
      $http({
        method: 'GET',
        url: '../data/guide.json'
      })
      .then(function(response) {
        $scope.books = response.data.guide;
        console.log(response);
        resolve(response);
      });
    });
  };
});
