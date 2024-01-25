(function(){
  'use strict';

  angular.module('DIApp',[])
  // responsepole function of controller is DIcontroller
  .controller('DIcontroller',DIcontroller);

  // define responspole function of controller with $scope and fillter 
function DIcontroller($scope, $filter){
   $scope.name='Dareen';


   // define function that convert text to upper case when text box lose foucs, upper variable include this function 
   $scope.upper= function (){
    
    var upcase= $filter('uppercase');
    $scope.name=upcase($scope.name);
   };
};

})();