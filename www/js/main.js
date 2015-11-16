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
   //===== CONSTRUCTORS =====

    //$scope.Bin = function(type, size, units, append_div) {
    //    //variable declaration
    //    this.type = type;
    //    this.size = size;
    //    this.units = 0;
    //
    //    this.container = document.createElement('div');
    //    this.container.setAttribute('class','bin');
    //    this.container.innerHTML = this.type + ', ' + this.size + ', ' + this.units;
    //
    //
    //    append_div.appendChild(this.container);
    //}

    //===== VARS ======
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

    //grab bin body
    var bin_container = document.getElementById('bin_body');
    //append test bin
    $scope.soloBin = new Bin('test type', 'test size', 54, bin_container);

}]);

