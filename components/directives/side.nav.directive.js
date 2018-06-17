;(function() {
  'use strict';

  angular.module('myApp')
    .directive('sideNav', sideNav);

  function sideNav($rootScope) {

    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      templateUrl: 'components/directives/side-nav.html',
      link: function(scope, elem, attrs, ctrl) {
      },
      controller: function ($scope) {
        $scope.display = function(people){
          $rootScope.people = people;
        }
      } 
    };

    return directiveDefinitionObject;
  }


})();