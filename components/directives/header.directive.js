;(function() {
  'use strict';
  angular
    .module('myApp')
    .directive('header', headerBar);
  function headerBar($rootScope) {

    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      templateUrl: 'components/directives/header.html',
      link: function(scope, elem, attrs, ctrl) {
        
      }
    };

    return directiveDefinitionObject;
  }

})();