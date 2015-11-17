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

  $routeProvider.when('/local', {
    templateUrl:'partials/local_storage.html',
    controller:'LocalStorageController'
  });

  //any other location, redirect to about page
  $routeProvider.otherwise({
    redirectTo:'/parts'
  });
}]);


