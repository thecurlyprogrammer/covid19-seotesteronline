// Include app dependency on ngMaterial
var app = angular.module('covid19', ['ngMaterial', 'ngMessages'])
    
app.controller("test",
  function($scope, $http) {
    // Hello World!
    $http({
      method : "GET",
      url : "https://api.covid19api.com/summary"
    }).then(function mySuccess(response) {
        $scope.date = response.data.Date;
        $scope.global = response.data.Global;
        $scope.countries = response.data.Countries;
        console.log('ok');
        // console.log($scope.myWelcome)
      }, function myError(response) {
        $scope.date = response.statusText;
        $scope.global = response.statusText;
        $scope.countries = response.statusText;
    });
  });