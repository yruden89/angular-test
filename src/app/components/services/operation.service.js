(function(){
  angular
    .module("services")
    .factory("operations", operationsService);

  operationsService.$inject = ["operationConstants"]

  function operationsService(operations){
    return {
      executeOp: function(firstNumber, secondNumber, operation){
        switch (operation){
          case operations.addition: return firstNumber + secondNumber;
          case operations.subtraction: return firstNumber - secondNumber;
          case operations.multiplication: return firstNumber * secondNumber;
          case operations.division: return firstNumber / secondNumber;
          case operations.equality:
            if(secondNumber === 0) return firstNumber;
            return secondNumber;
        }
      }
    }
  }
})();
