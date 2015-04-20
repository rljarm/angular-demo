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
.controller('listfun', ['$scope', function($scope){
  $scope.numbers = [];
  $scope.compute = function(){
    $scope.numbers = $scope.numbersList.split(',');
    $scope.sum = $scope.numbers.reduce(function(prev, curr){
      return prev*1 + curr*1;
    });
    $scope.product = $scope.numbers.reduce(function(prev, curr){
      return (prev*1) * (curr*1);
    });
  };
  $scope.addNumber = function(){
    $scope.sum = $scope.sum + $scope.numberAdded*1;
    $scope.product = $scope.product * $scope.numberAdded;
    $scope.numbers.push($scope.numberAdded.toString());
    console.log($scope.numbers);
  };

}])
.controller('gamma', ['$scope', function($scope){
  console.log('gamma controller initailized');
  $scope.x = 5;
  $scope.y = 7;
}])
.controller('rainbow', ['$scope', function($scope){
  console.log('rainbow controller initailized');
  $scope.colors = ['blue', 'green', 'red'];
  $scope.removeColor = function(index){
    $scope.colors.splice(index, 1);
  };
  $scope.newcolor = '#ff33cc';
  $scope.addColor = function(){
    console.log('you just clicked add color');
    var color = $scope.newcolor;
    console.info('you want to add ', color);
    $scope.colors.push(color);
  };
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
