var ca = angular.module('crimeApp',['ngRoute']).config(['$routeProvider',function($routeProvider){
  $routeProvider
    .when('/home',{
      templateUrl: 'views/filterTab.html',
      controller: 'filterCtrl'
    })
    .when('/update',{
      templateUrl: 'views/update.html',
      controller: ''
    })
}]).controller('dataCtrl',function($scope){
  $scope.dataObj = {
    "1986":{"Over$500":32871,"Under$500":61777},
    "1987":{"Over$500":27842,"Under$500":47493},
    "1988":{"Over$500":20654,"Under$500":37023},
    "1989":{"Over$500":19291,"Under$500":35872},
    "1990":{"Over$500":18849,"Under$500":27920},
    "1991":{"Over$500":20724,"Under$500":27182},
    "1992":{"Over$500":22118,"Under$500":25238},
    "1993":{"Over$500":24141,"Under$500":25396},
    "1994":{"Over$500":21502,"Under$500":24216},
    "1995":{"Over$500":21851,"Under$500":24632},
    "1996":{"Over$500":15668,"Under$500":28993},
    "1997":{"Over$500":15978,"Under$500":29526},
    "1998":{"Over$500":15615,"Under$500":27898},
    "1999":{"Over$500":14954,"Under$500":28841},
    "2000":{"Over$500":12651,"Under$500":24629},
    "2001":{"Over$500":32871,"Under$500":61777},
    "2002":{"Over$500":27842,"Under$500":47493},
    "2003":{"Over$500":20654,"Under$500":37023},
    "2004":{"Over$500":19291,"Under$500":35872},
    "2005":{"Over$500":18849,"Under$500":27920},
    "2006":{"Over$500":20724,"Under$500":27182},
    "2007":{"Over$500":22118,"Under$500":25238},
    "2008":{"Over$500":24141,"Under$500":25396},
    "2009":{"Over$500":21502,"Under$500":24216},
    "2010":{"Over$500":21851,"Under$500":24632},
    "2011":{"Over$500":15668,"Under$500":28993},
    "2012":{"Over$500":15978,"Under$500":29526},
    "2013":{"Over$500":15615,"Under$500":27898},
    "2014":{"Over$500":14954,"Under$500":28841},
    "2015":{"Over$500":12651,"Under$500":24629},
    "2016":{"Over$500":3563,"Under$500":6047}};

  $scope.yearArray = Object.keys($scope.dataObj);
  $scope.valueArray = [];
  for(var i=0;i<$scope.yearArray.length;i++){
    $scope.valueArray.push($scope.dataObj[$scope.yearArray[i]]);
  }











});
