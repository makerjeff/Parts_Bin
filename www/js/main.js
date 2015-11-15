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

    $scope.stuff = {value:'hideeho'};
    $scope.bins = [
        {'type':'hex bolt', 'size':'3M x 10', 'units': 5},
        {'type':'hex bolt', 'size':'3M x 20', 'units': 10},
        {'type':'hex bolt', 'size':'3M x 30', 'units': 15},
        {'type':'hex bolt', 'size':'3M x 40', 'units': 20},
        {'type':'hex bolt', 'size':'5M x 10', 'units': 20},
        {'type':'hex bolt', 'size':'5M x 20', 'units': 20},
        {'type':'hex bolt', 'size':'5M x 30', 'units': 20},
        {'type':'hex bolt', 'size':'3M x 10', 'units': 5},
        {'type':'hex bolt', 'size':'3M x 20', 'units': 10},
        {'type':'hex bolt', 'size':'3M x 30', 'units': 15},
        {'type':'hex bolt', 'size':'3M x 40', 'units': 20},
        {'type':'hex bolt', 'size':'5M x 10', 'units': 20},
        {'type':'hex bolt', 'size':'5M x 20', 'units': 20},
        {'type':'hex bolt', 'size':'5M x 30', 'units': 20}
    ];
}]);

//DEBUG message section controller
partsBinApp.controller('DebugController', ['$scope','$http','$sce', function($scope, $http, $sce) {
  
  //$test variable
  $scope.init_message = 'App is fully functional';
  
}]);

//navigation controller
partsBinApp.controller('NavController', ['$scope','$http','$sce', function($scope, $http, $sce) {
  //pull info from 'links.json'
  $http.get('js/links.json').success(function(data) {
    //load data array into $scope.links
    $scope.links = data;
  });
}]);


//about section controller
partsBinApp.controller('AboutController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
  //get data from about.json
  $http.get('js/about.json').success(function(data) {
    //returns JSON array, NOT OBJECT!
    $scope.about = data;
    
    //DEBUG, ensure the data is loading, read all entries and log them to console
    for (i = 0; i < $scope.about.length; i++) {
      console.log($scope.about[i].name);
      console.log($scope.about[i].url);
      console.log($scope.about[i].title);
      console.log($scope.about[i].bio);
    }
    
    // single about: pull data out of array #
    $scope.name = $scope.about[0].name;
    $scope.url = $scope.about[0].url;
    $scope.title = $scope.about[0].title;
    $scope.bio = $sce.trustAsHtml($scope.about[0].bio);
    
    
  });
}]);

//RESUME SECTION CONTROLLER
partsBinApp.controller('ResumeController', ['$scope','$http','$sce', function ($scope, $http, $sce) {
  
  $http.get('js/resume.json').success(function(data) {
    //grab all the data
    $scope.resume_data = data;
    
    //BREAK UP TO PARTS
    //grab the info object and load it into
    $scope.info_data = $scope.resume_data[0];
    
    //grab experience data
    $scope.experience_data = $scope.resume_data[1];
    
    //grab skills data
    $scope.skills_data = $scope.resume_data[2];
    
    //BREAK UP TO ATOMS
    
    
 
  });
  
}]);


