;
(function () {
  'use strict';
  angular.module('myApp')
    .directive('mainContent', responsiveNav);


  function responsiveNav($rootScope) {

    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      templateUrl: 'components/directives/main-content.html',
      link: function (scope, elem, attrs, ctrl) {
      },
      controller: function ($scope) {
        $scope.getNumber = function(count){
          var ratings = []; 
          for (var i = 0; i < count; i++) { 
            ratings.push(i) 
          } 
          return ratings;
        }
      }
    };

    return directiveDefinitionObject;
  }

})();