// main APP js file. Includes controllers

//DEFINE THE APP
var partsBinApp = angular.module('PartsBinAppName', ['ngRoute']);



//configure app
partsBinApp.config(['$routeProvider', function($routeProvider){

  //navigate to the parts page
  $routeProvider.when('/parts', {
    templateUrl:'partials/parts.html',
    controller:'PartsController'
  });

  //any other location, redirect to about page
  $routeProvider.otherwise({
    redirectTo:'/parts'
  });
}]);


//DEFINE CONTROLLERS

partsBinApp.controller('PartsController', ['$scope','$http', '$sce', function($scope, $http, $sce) {
    $scope.name = 'Jeff';
    $scope.stuff = {value:'dummy manual input'};

    //grab data via angular XHR
    $http.get('js/data.json').success(function(data) {
        $scope.bins = data; //data is a special data object, needs to be put into array
    });

    //grab the button
    $scope.add_button = document.getElementById('add_button');

    //NG-CLICK FUNCTIONS
    // test function
    $scope.funky = function(message) {
        console.log(message);
    };

}]);

