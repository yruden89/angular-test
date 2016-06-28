(function(){
  angular
    .module("common-directives")
    .directive("operation", operationDirective);

  function operationDirective(){
    return {
      restrict: "A",
      transclude: true,
      templateUrl: "app/components/operation.directive.html",
      scope: {
        triggeredOperation: "&"
      },
      link: linkFunction
    };
  }

  function linkFunction($scope, element){
    element.on("click", function(e){
      e.preventDefault();

      if($scope.triggeredOperation){
        $scope.triggeredOperation();
        $scope.$apply();
      }
    });

    element.on("$destroy", function(){
      element.off("click");
    })
  }

})();
