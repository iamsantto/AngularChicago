ca.controller('insertCtrl',['$scope','$window',function($scope,$window){
  $scope.addObj = {
    year : 0,
    under : 0,
    over : 0
  };

  $scope.addNew = function (x){
    $window.alert("Successfully Added");
  };

}]);
