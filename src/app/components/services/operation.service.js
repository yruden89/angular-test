(function(){
  angular
    .module("services")
    .factory("operations", operationsService);

  operationsService.$inject = ["operationConstants", "$http", "$q", "$window"];

  function operationsService(operations, $http, $q, $window){
    return {
      executeOp: function(firstNumber, secondNumber, operation){
        var deferred = $q.defer();
        var httpResult = $http({
          url: "http://localhost:18188//api/operations",
          method: "POST",
          data: {
            FirstNumber: firstNumber,
            SecondNumber: secondNumber,
            OperationType: operation
          }
        });
        httpResult.then(
          function(response){
            if(!response.data.IsSuccessfull){
              deferred.reject();
              $window.alert("Operations  service failed");
            }
            deferred.resolve(response.data.Result);
          },
          function(){
            deferred.reject();
          }
        );
        return deferred.promise
      }
    }
  }
})();
