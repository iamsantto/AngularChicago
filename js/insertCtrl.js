ca.controller('insertCtrl',['$scope','$window','$location',function($scope,$window,$location){
  $scope.addObj = {};
  $scope.addNew = function (x){
    $scope.$emit('insertVal', x);
    $location.path('/home');
    $window.alert("Successfully Added!\nOver Value = " + x.over + "\nUnder Value = " + x.under + "\nYear = " + x.year);
  };
}]);
