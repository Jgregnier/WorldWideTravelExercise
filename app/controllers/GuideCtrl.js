"use strict";

app.controller("GuideCtrl", function ($scope, $http, $q, GuideStorage) {

  $scope.guides = null;

  $scope.getGuidesFromFactory = function() {
    GuideStorage.getGuides()
    .then(function (guideObject) {
      $scope.guides = guideObject.guide;
      console.log(guideObject.guide);
    });
  };
});
