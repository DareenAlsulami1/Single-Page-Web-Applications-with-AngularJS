(function() {
    'use strict';
    angular.module('Assinament1App', [])
      .controller('Assig1Conroller', AssigFunction);
  
    AssigFunction.$inject = ['$scope'];
  
    function AssigFunction($scope) {
      $scope.items = '';
  
      $scope.checkitems = function() {
        const items_array = $scope.items.split(',');
        console.log(items_array);
        var itemsno = items_array.length;

  
        if($scope.items==''){
            $scope.output = 'Please enter data first';
        }else {
         if (itemsno <= 3 && itemsno!=0) {
          $scope.output = 'Enjoy!';
        } else {
          $scope.output = 'Too much!';
        }
    }
      };
    }
  })();