(function(){
    'use strict';

    angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope){
        // controller papmters
      $scope.name="";
      $scope.totalValue=0; // count char num of name var 

      $scope.displayNumric= function(){
        // call function calcStringNum and send Name 
        var totalNameValue=calcStringNum($scope.name);

        // pass totalNum to scope var 
        $scope.totalValue=totalNameValue;
      }; // end displayNumric

      // this function sum total num of char code that passed by String paramter 
      function calcStringNum(String){
        var totalNumStrinf=0; // initlaize counter with 0 
        for (var i = 0 ; i< String.length ; i++){
            totalNumStrinf+=String.charCodeAt(i);
        } // loop throw string char and sum cchar code 

        return totalNumStrinf;
      }; // end calcStringNum

    }); // end displayNumric
})();