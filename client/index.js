'use strict';
angular.module('alpha', [])
.run(['$rootScope', function($rootScope){
  $rootScope.z = 12;
}])
.controller('beta', ['$scope', function($scope){
  console.log('beta controller initailized');
  $scope.x = 3;
  $scope.y = 2;
}])
.controller('gamma', ['$scope', function($scope){
  console.log('gamma controller initailized');
  $scope.x = 5;
  $scope.y = 7;
}])
.controller('calculator', ['$scope', function($scope){
  console.log('calculator controller initailized');
  $scope.compute = function(){
    var result;
    var x = $scope.x;
    var y = $scope.y;
    switch($scope.op){
      case '+':
        result = x + y;
        break;
      case '-':
        result = x - y;
        break;
      case '*':
        result = x * y;
        break;
      case '/':
        result = x / y;
    }
    $scope.result = result;
  };
}]);
