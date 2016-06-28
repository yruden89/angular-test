(function() {
  'use strict';



  angular
    .module('test')
    .controller('MainController', MainController);

  MainController.$inject = ["$scope", "operations", "operationConstants"];

  /** @ngInject */
  function MainController($scope, operations, operationsConstants) {
    $scope.result = 0;
    $scope.currentOperation = operationsConstants.addition;
    $scope.currentNumber = 0;

    $scope.operationEntered = operationEntered;
    $scope.digitEntered = digitEntered;
    $scope.reset = reset;


    function operationEntered(operationType){
      $scope.result = operations.executeOp($scope.result, $scope.currentNumber, $scope.currentOperation);
      $scope.currentNumber = 0;
      $scope.currentOperation = operationType;
    }

    function reset(){
      $scope.result = 0;
      $scope.currentOperation = operations.addition;
      $scope.currentNumber = 0;
    }

    function digitEntered(digit){
      var number = $scope.currentNumber.toString() + digit;
      $scope.currentNumber = parseFloat(number);
    }
  }
})();
