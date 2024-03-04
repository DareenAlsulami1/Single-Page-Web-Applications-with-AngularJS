( function(){
'use strict'
angular.module('Msgapp',[])
.controller('MsgController', MsgFunction);
MsgFunction.$inject=['$scope', '$filter'];

function MsgFunction($scope, $filter){
  $scope.stateOfBeing="angry";
  $scope.foodCost=2;
 
  $scope.saymsg= function SayMessage(){
    var msg = 'FIFI likes to eat peoples hands !';
    var output= $filter('uppercase')(msg);

    return output;
  };
  $scope.feedFifi= function(){
    $scope.stateOfBeing="happy";
  };
};
})();

