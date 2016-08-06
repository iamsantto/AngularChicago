ca.controller('updateCtrl',['$scope','$location','$window',function($scope,$location,$window){
  $scope.up = {
    year: 0,
    over: 0,
    under: 0
  };

  $scope.$on('updateTrig',function(evt,args){
    $scope.up.year = args.year;
  });

  $scope.update = function(x){
    $scope.$emit('updated',x);
    $location.path('/home');
    $window.alert("Updated the record for the Year " + $scope.up.year);
  };

}]);
