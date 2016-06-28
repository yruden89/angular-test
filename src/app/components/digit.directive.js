(function(){
  angular
    .module("common-directives")
    .directive("digit", operationDirective);

  function operationDirective(){
    return {
      restrict: "A",
      transclude: true,
      templateUrl: "app/components/digit.directive.html",
      scope: {
        digitEntered: "&"
      },
      link: linkFunction
    };
  }

  function linkFunction($scope, element){
    element.on("click", function(e){
      e.preventDefault();

      if($scope.digitEntered){
        $scope.digitEntered();
        $scope.$apply();
      }
    });

    element.on("$destroy", function(){
      element.off("click");
    })
  }

})();
