ca.controller('updateCtrl',['$scope','$location','$window',function($scope,$location,$window){


  $scope.$on('updateTrig',function(evt,args){
    $scope.up = {
      year: args.year,
      over: 0,
      under: 0
    };
  });

  $scope.update = function(x){
    $scope.$emit('updated',x);
    $location.path('/home');
    $window.alert("Updated the record for the Year " + $scope.up.year);
  };

}]);
