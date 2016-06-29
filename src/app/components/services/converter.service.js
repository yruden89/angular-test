(function(){
  angular
    .module("services")
    .factory("converter", converterService);

  converterService.$inject = ["$http", "$q", "$window"];

  function converterService($http, $q, $window){
    return {
      convert: function(amount){
        var deferred = $q.defer();
        var httpResult = $http({
          url: "http://localhost:18188//api/converter",
          method: "POST",
          data: {
            From: "USD",
            To: "GBP",
            Amount: amount
          }
        });
        httpResult.then(
          function(response){
            if(!response.data.IsSuccessfull){
              deferred.reject();
              $window.alert("Converter service failed");
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
