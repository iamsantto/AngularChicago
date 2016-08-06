  ca.controller('filterCtrl',['$scope','$rootScope',function($scope,$rootScope){
    $scope.search = function(x){
      $scope.$emit('searchFor',x);
    }
  }]);
