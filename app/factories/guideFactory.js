  "use strict";

app.factory("GuideStorage", function($q, $http) {

  let getGuides = function () {
    return $q(function(resolve, reject) {
      $http({
        method: 'GET',
        url: '../data/guide.json'
      })
      .success(function(guideObject) {
        resolve(guideObject);
      });
    });
  };

  return {getGuides};
});
