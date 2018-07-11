(function () {
  'use strict';

  angular
    .module('htmlcss', [])
    .controller('htmlcssController', loadFunction);

  loadFunction.$inject = ['$scope', 'structureService', '$location', '$translate'];

  function loadFunction($scope, structureService, $location, $translate) {
    //Register upper level modules
    structureService.registerModule($location, $scope, 'htmlcss', $translate.use());
    var config = $scope.htmlcss.modulescope;

    if (config.useTranslate) {
      $scope.code = $scope.htmlcss.modulescope["value-lang"];
    } else {
      $scope.code = $scope.htmlcss.modulescope.value;
    }

    $scope.styleCode = config.styleCode;

  }
}());
