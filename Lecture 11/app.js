( function(){
'use strict'
angular.module('Msgapp',[])
.controller('MsgController', MsgFunction);
MsgFunction.$inject=['$scope'];

function MsgFunction($scope){
  $scope.stateOfBeing="angry";
 
  $scope.feedFifi= function(){
    $scope.stateOfBeing="happy";
  };
};
})();

