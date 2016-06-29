(function() {
  'use strict';



  angular
    .module('test')
    .controller('MainController', MainController);

  MainController.$inject = ["$scope", "operations", "converter", "operationConstants"];

  /** @ngInject */
  function MainController($scope, operations, converter, operationsConstants) {
    $scope.result = 0;
    $scope.currentOperation = operationsConstants.addition;
    $scope.currentNumber = 0;

    $scope.operationEntered = operationEntered;
    $scope.digitEntered = digitEntered;
    $scope.reset = reset;
    $scope.convertCurrency = convertCurrency;


    function operationEntered(operationType){
      operations.executeOp($scope.result, $scope.currentNumber, $scope.currentOperation).then(function(result){
        $scope.result = result;
        $scope.currentNumber = 0;
        $scope.currentOperation = operationType;
      });
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

    function convertCurrency(){
      converter.convert($scope.currentNumber).then(function (result) {
        $scope.result = result;
        $scope.currentNumber = 0;
        $scope.currentOperation = operations.addition;
      });
    }
  }
})();
