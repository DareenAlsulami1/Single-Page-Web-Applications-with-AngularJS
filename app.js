// to make sure no local varibles bleed into the local scope 
(function(){
    // to make sure there is no mistakes, you can check in console 
 'use strict';

angular.module('MyFirstApp', [] )
.controller('MyFirstController', function($scope) {
    // shared data between anguar and html files, here i give name a value then if i use it in html (name)
    // at controller space , i will have the same value try it 
  $scope.name='Dareen'

  // i can define function 
  $scope.sayhello = function(){ return 'hello dood this is a returned value from function !'; }
});

})();