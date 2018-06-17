/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular
    .module('myApp')
    .controller('MainController', MainController);

  MainController.$inject = ['QueryService', '$rootScope'];

  function MainController(QueryService, $rootScope) {
    $rootScope.peoples = [];
    $rootScope.people = {};
   
    QueryService.query('GET', '/js/data/people.json', {}, {})
      .then(function(ovocie) {
        var people = ovocie.data;
        $rootScope.peoples = people;
        people = people.People  || [];
        if(people.length > 0){
        $rootScope.people = people[0];
          people.forEach(o => {
            likes_data = [];
            for (let i = 0; i < o.Likes.length || i < o.Dislikes.length; i++) {
              var temp = {'Likes': o.Likes[i] || '', 'Dislikes':  o.Dislikes[i] || ''};
              likes_data.push(temp);
            }
            o.likes_data = likes_data;
          });
        }
      });
  }


})();