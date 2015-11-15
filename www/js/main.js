// main APP js file. Includes controllers

//DEFINE THE APP
var resumeApp = angular.module('resumeAppName', ['ngRoute']);

//configure app
resumeApp.config(['$routeProvider', function($routeProvider){

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

//DEBUG message section controller
resumeApp.controller('DebugController', ['$scope','$http','$sce', function($scope, $http, $sce) {
  
  //$test variable
  $scope.init_message = 'App is fully functional';
  
}]);

//navigation controller
resumeApp.controller('NavController', ['$scope','$http','$sce', function($scope, $http, $sce) {
  //pull info from 'links.json'
  $http.get('js/links.json').success(function(data) {
    //load data array into $scope.links
    $scope.links = data;
  });
}]);


//about section controller
resumeApp.controller('AboutController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
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
resumeApp.controller('ResumeController', ['$scope','$http','$sce', function ($scope, $http, $sce) {
  
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


